import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Container, UncontrolledTooltip, Alert, Button, Spinner, ButtonGroup, Card, CardHeader, CardFooter, CardBody,CardTitle, CardText } from "reactstrap";
import { CustomFile, CustomCheckbox, ViewPDF } from "bsiuilib";
import generateReportAPI from "../api/generateReportAPI";
import * as metaData from "../metadata/metaData";
import * as styles from "../../base/constants/AppConstants";
import * as fieldData from "../metadata/fieldData";
import { tftools as tfTools } from "../../base/constants/TFTools";
import { setFilterFormData } from "../actions/filterFormActions";

class BatchTest extends Component {
  constructor(props) {
    super(props);
    const { pgid } = this.props;
    const [uploadField, modeField] = fieldData[pgid];
    this.state = {
      uploadResults: null,
      values: {
        [uploadField.id]: uploadField.value,
        [modeField.id]: modeField.value || []
      },
      cSelected: [],
      rSelected: 1,
      testContent: '',
      fileName: '',
      displayFileName:"",
      viewPdfMode: false,
      file: "",
      loading: false,
      errorMsg: '',
    };
    const toBase64 = file =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });

    this.onFileSelect = event => {
      const [file] = event.target.files;
      const { values } = this.state;
      const { pgid } = this.props;
      const [uploadField] = fieldData[pgid];
      values[uploadField.id] = event.target.value;
      this.setState(
        {
          values,
          fileName: file.name,
        },
        async () => {
          this.base64File = await toBase64(file);
        }
      );
    };

    this.onUpload = () => {
      const { pgid } = this.props;
      const [uploadField, modeField] = fieldData[pgid];
      const { base64File } = this;
      const { cSelected, rSelected, testContent, fileName } = this.state;

      if (fileName === '' && rSelected === 1) {
        this.setState({
          errorMsg: "Please upload valid file",
        });
        return;
      } else if (testContent === '' && rSelected === 2) {
        this.setState({
          errorMsg: "Please upload valid test content",
        });
        return;
      }
      const inputFile =  rSelected === 1 ? base64File : btoa(testContent);
      const payload = {
        data: inputFile.substring(inputFile.indexOf(',') + 1, inputFile.length),
        exportMode: cSelected,
        fileName,
      };
      this.setState({
        loading: true,
        errorMsg: '',
        displayFileName:fileName
      })
      generateReportAPI.generate(pgid, payload).then(uploadResults => {
        if(uploadResults.code && uploadResults.code !== 200){
          this.setState({
            errorMsg: uploadResults.message,
            loading: false
          })
        } else {
          this.setState({
            uploadResults,
            values: {
              [uploadField.id]: "",
              [modeField.id]: []
            },
            loading: false,
            errorMsg: '',
            fileName: '',
            testContent: '',
          });
        }
      })
    };

   this.openMessageViewer = () => {
      const data = tfTools.find(tool => tool.id === "messageViewer");
      if (data) {
        renderTFConfigNTaxes("pageContainer", data);
      }
    };
   this.onCheckboxBtnClick = (selected) => {
     const currSelected = this.state.cSelected;
    const index = currSelected.indexOf(selected);
    if (index < 0) {
      currSelected.push(selected);
    } else {
      currSelected.splice(index, 1);
    }
    this.setState({ cSelected: currSelected });
  }

  this.downloadFile = (file) => {
    const byteCharacters = atob(file.fileData);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const output = new Blob([byteArray]);
    var anchor = document.createElement("a");
    var url = window.URL || window.webkitURL;
    anchor.href = url.createObjectURL(output);
    var downloadFileName = file.fileName;
    anchor.download = downloadFileName;
    document.body.append(anchor);
    anchor.click();

    setTimeout(function () {
      document.body.removeChild(anchor);
      url.revokeObjectURL(anchor.href);
    }, 100);
  }
  }

  

  render() {
    const { pgid } = this.props;
    const { values, uploadResults, type, mode } = this.state;
    const { pgdef } = metaData[pgid];
    const [uploadField, modeField] = fieldData[pgid];
    return (
      <Container>
        <Row>
          <h1 style={styles.pagetitle}>{pgdef.pgtitle}</h1>
          <span style={{ marginLeft: "10px" }}>
            <span id="help">
              <span>
                <i className="fas fa-question-circle  fa-lg" onClick={this.OpenHelp} style={styles.helpicon} />
              </span>
            </span>
            <UncontrolledTooltip placement="top" target="help">
              <span> Help </span>
            </UncontrolledTooltip>
            </span>
            <span style={{ marginLeft: "10px" }}>
            <span id="pageInfo">
              <span>
                <i className="fas fa-info-circle  fa-lg" style={styles.helpicon} />
              </span>
            </span>
            <UncontrolledTooltip placement="right" target="pageInfo">
              <span> {pgdef.pgsubtitle} </span>
            </UncontrolledTooltip>
          </span>
        </Row>
        <Row>
          <Col xs="12" className='mt-2'>
           <Alert color="info">
            {pgdef.disclaimer}
          </Alert>
          </Col>
        </Row>
        
        <Card>
        <CardHeader> File Upload</CardHeader>
        <CardBody style={{marginLeft: '100px'}}>
        <CardTitle tag="h5" style={{marginLeft:'-16px'}}>Please select file or use test content to upload</CardTitle>
        <Row>
          <div style={{ display: 'flex', marginBottom: '10px', marginTop: '20px'}}>
          <div 
              style={{ 
                marginBottom: '15px',
              }} 
              class="btn-group btn-group-toggle" 
              data-toggle="buttons"
            >
              <ButtonGroup>
                <Button color="primary" onClick={() => this.setState({ rSelected:1, fileName: '', testContent: '', errorMsg: ''})} active={this.state.rSelected === 1}>File</Button>
                <Button color="primary" onClick={() => this.setState({ rSelected:2, testContent: '', fileName: '', errorMsg: ''})} active={this.state.rSelected === 2}>Test Content</Button>
              </ButtonGroup>
            </div>
          </div> 
        </Row>
        <Row>
        <div style={{ display: 'flex'}}>
          {/* <span style={{     width: '50px',
    display: 'inline-block',
    textAlign: 'left'}}>Mode </span> : */}
          <div style={{ 
                marginBottom: '15px',
              }}  
              data-toggle="buttons"
            >
            
              <Button id="whatifCheckbox" style={{ marginRight: '10px' }} color="success" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}> {this.state.cSelected.includes(1) && <i class="fas fa-check-square"></i>} Export
              <UncontrolledTooltip placement="top" target="whatifCheckbox">
                <span> Export to What-if Test </span>
              </UncontrolledTooltip></Button>
              <Button id="extendedCheckbox" style={{ marginRight: '10px' }} color="success" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}> {this.state.cSelected.includes(2) && <i class="fas fa-check-square"></i>} Extended Format
              <UncontrolledTooltip placement="top" target="extendedCheckbox">
                <span> Output in Extended Format </span>
              </UncontrolledTooltip></Button>
              <Button id="summaryCheckbox" color="success" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}> {this.state.cSelected.includes(3) && <i class="fas fa-check-square"></i>} Generate Summary
              <UncontrolledTooltip placement="top" target="summaryCheckbox">
                <span> Generate Summary MNC file </span>
              </UncontrolledTooltip></Button>
            
          </div> 
          </div>
        </Row>
        <Row>
        <div style={{ display: 'flex'}}>
          {/* <span style={{     width: '50px',
              display: 'inline-block',
              textAlign: 'left'}}>File </span> : */}
          <div style={{
            display: 'flex', marginLeft: '-15px', marginTop: '10px',
            alignItems: `${this.state.rSelected === 1 ? 'flex-start' : 'flex-end'}`
          }}>
            {
              this.state.rSelected === 1
              ? <CustomFile {...uploadField} accept='.tst' value={values[uploadField.id]} onChange={this.onFileSelect} />
              : <textarea style={{ marginLeft: '15px'}} rows="4" cols="50" value={this.state.testContent} onChange={(event) => this.setState({ testContent: event.target.value})} />
            }
              <Button disabled={this.state.loading} style={{ height: "36px", marginLeft: `${this.state.rSelected === 1 ? '-12px' : '10px'}`, marginRight: '10px'}} color="primary" onClick={this.onUpload}>
                  Upload <i class="fas fa-cloud-upload-alt"></i>
              </Button>
          </div>
        </div>
        </Row>
        </CardBody>
        <CardFooter>&nbsp;
        {this.state.errorMsg && <div>{this.state.errorMsg}</div> }
        {this.state.loading && <i class="fas fa-spinner fa-spin fa-2x" style={{  color: 'green', width: 'max-content', margin: '0 auto', display: 'flex', }}></i> }
        {uploadResults && uploadResults.fileOutputs.length ? 
        <Row>
          <Col>
            <div>
              <UploadResults 
                downloadFile={this.downloadFile} 
                uploadResults={uploadResults.fileOutputs} 
                fileName={this.state.fileName}
                displayFileName={this.state.displayFileName}
                handlePdfView={(file) => this.setState({ file: file.fileData, viewPdfMode: !this.state.viewPdfMode})}
                pdfData={this.state.file}
                viewPdfMode={this.state.viewPdfMode}
              />
            </div>
          </Col>
        </Row>: null}
        </CardFooter>
        </Card>
        {uploadResults && uploadResults.fileOutputs.length && <Row style={{marginLeft:'0px'}}>
          <div>Open <a href="#" onClick={this.openMessageViewer}>Message Viewer</a> for details</div>
        </Row> }
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    isOpen: state.formData.isOpen,
    formData: state.formData,
    formFilterData: state.formFilterData
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setFilterFormData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BatchTest);

export const UploadResults = props => {
  const { uploadResults, fileName, downloadFile, viewPdfMode, pdfData, handlePdfView, displayFileName } = props;
  if (uploadResults[0].uploadMode === 'batchtest') {
    uploadResults.shift();
  }
  const openMessageViewer = (event) => {
    event.preventDefault();
    const data = tfTools.find(tool => tool.id === "messageViewer");
    if (data) {
      renderTFConfigNTaxes("pageContainer", data);
    }
  };

  return (
    <Fragment>
          <p>Test result for {displayFileName}</p>
          <div style={{ display:'flex', color: ' rgb(76, 115, 146)', margin: '0 auto', justifyContent: 'center'}}>
          {uploadResults.map((file, index) => {
            return (
           <div style={{ display: 'flex', color: ' rgb(76, 115, 146)'}}>
        <span style={{ margin:'0 5px'}} id="downloadResult" onClick={() => downloadFile(file)}>
        <Button color="primary" size='sm'><i class="fas fa-cloud-download-alt"></i> {file.uploadMode === 'results' && 'Download Result'} {file.uploadMode === 'summarymnc' && 'Download Summary'} {file.uploadMode === 'errorreport' && 'Download Err Report'}</Button>
        </span>
        <span style={{ margin:'0 5px'}} id="viewPdf" onClick={() => handlePdfView(file, index)}>
        <Button color="primary" size='sm'><i class="far fa-file-pdf"></i> {file.uploadMode === 'results' && 'View Result'} {file.uploadMode === 'summarymnc' && 'View Summary'} {file.uploadMode === 'errorreport' && 'View Err Report'}</Button>
        </span>
        </div>   
            )
          })}
         </div>
        <ViewPDF view={viewPdfMode} handleHidePDF={handlePdfView} pdfData={{ docData: pdfData}} />
        </Fragment>
  );
};
