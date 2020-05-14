import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  CustomInput,
  FormGroup,
  Label,
  Col,
  Form,
  Input,
  Jumbotron,
  Container,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonGroup
} from "reactstrap";
const rowStyle = { marginBottom: "0.5rem" };
const rowStylelast = { marginBottom: "0rem" };
class TestHarness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: true,
      test: "",
      toolsInfoData: "",
      metadataFile: "",
      fieldData: "",
      mockData: "",
      filterFile:"",
      errorMessage: "",
      validMessage: "",
      screenType:1
    };
    this.handleFileTIRead = this.handleFileTIRead.bind(this);
    this.handleFileMDRead = this.handleFileMDRead.bind(this);
    this.handleFileFDRead = this.handleFileFDRead.bind(this);
    this.handleFileDDRead = this.handleFileDDRead.bind(this);
    this.handleFileFIRead = this.handleFileFIRead.bind(this);
    this.metadataCancel   = this.metadataCancel.bind(this);
    this.fileReaderTI = "";
    this.fileReaderMD = "";
    this.fileReaderFD = "";
    this.fileReaderDD = "";
    this.fileReaderFI = "";
  }
  metadataCancel() {
    this.setState({modal:false});
    renderTFApplication("appContent", "renderTFHome");
  }
  onToolsInfo() {
    this.fileReaderTI = new FileReader();
    this.fileReaderTI.onloadend = this.handleFileTIRead;
    this.fileReaderTI.readAsText(this.toolsInfo.files[0]);
  }
  onMetadataFile() {
    this.fileReaderMD = new FileReader();
    this.fileReaderMD.onloadend = this.handleFileMDRead;
    this.fileReaderMD.readAsText(this.metadtaFile.files[0]);
  }
  onFilterInfo() {
    this.fileReaderFI = new FileReader();
    this.fileReaderFI.onloadend = this.handleFileFIRead;
    this.fileReaderFI.readAsText(this.filterInfo.files[0]);
  }
  onFieldDataFile() {
    this.fileReaderFD = new FileReader();
    this.fileReaderFD.onloadend = this.handleFileFDRead;
    this.fileReaderFD.readAsText(this.fieldData.files[0]);
  }
  onMockDataFile() {
    this.fileReaderDD = new FileReader();
    this.fileReaderDD.onloadend = this.handleFileDDRead;
    this.fileReaderDD.readAsText(this.mockData.files[0]);
  }
  handleFileTIRead(e) {
    try {
      let toolsInfoData = JSON.parse(e.currentTarget.result);
      this.setState({
        toolsInfoData: toolsInfoData,
        errorMessage: "",
        validMessage: toolsInfoData.label+ " Screen Information JSON Format is valid.",
      });
    } catch (err) {
      this.setState({
        errorMessage: "Invalid Screen Information JSON : " + err.message,
        validMessage: "",
      });
    }
  }
  handleFileMDRead(e) {
    try {
      let metadataFile = JSON.parse(e.currentTarget.result);
      this.setState({
        metadataFile: metadataFile,
        errorMessage: "",
        validMessage: metadataFile.pgdef.pgtitle+" Metadata JSON Format is valid.",
      });
    } catch (err) {
      this.setState({
        errorMessage: "Invalid Metadata JSON : " + err.message,
        validMessage: "",
      });
    }
  }
  handleFileFIRead(e) {
    try {
      let filterFile = JSON.parse(e.currentTarget.result);
      this.setState({
        filterFile: filterFile,
        errorMessage: "",
        validMessage: "Filter UI JSON Format is valid.",
      });
    } catch (err) {
      this.setState({
        errorMessage: "Invalid Filter UI JSON : " + err.message,
        validMessage: "",
      });
    }
  }
  handleFileFDRead(e) {
    try {
      let fieldData = JSON.parse(e.currentTarget.result);
      this.setState({
        fieldData: fieldData,
        errorMessage: "",
        validMessage: this.state.toolsInfoData.label+" Field Data JSON Format is valid.",
      });
    } catch (err) {
      this.setState({
        errorMessage: "Invalid Field Data JSON : " + err.message,
        validMessage: "",
      });
    }
  }
  handleFileDDRead(e) {
    try {
      let mockData = JSON.parse(e.currentTarget.result);
      this.setState({
        mockData: mockData,
        errorMessage: "",
        validMessage: "Mock Data JSON Format is valid.",
      });
    } catch (err) {
      this.setState({
        errorMessage: "Invalid Field Data JSON : " + err.message,
        validMessage: "",
      });
    }
  }
  onGenerateUIComp() {
    let tool=null; 
    let metadata=null; 
    let mockdata=null;
    let fieldData=null;
    if(this.state.screenType==1 || this.state.screenType==2 || this.state.screenType==3 || this.state.screenType==4){
      tool= this.state.toolsInfoData;
      metadata = this.state.metadataFile
      mockdata= this.state.mockData;
      console.log("this.state.fieldData");
      fieldData = this.state.fieldData;
      console.log(fieldData);
    }
    if(!mockdata){
      mockdata=[];
    }
    renderTestComponent("pageContainer",tool, metadata,mockdata,fieldData);
  }
  onScreenType(screenType) {
    this.setState({ screenType });
  }
  render() {
    let screenTypeInputs = null;
    let scrInfoInput = (
      <FormGroup row style={rowStyle}>
        <Col sm={4}>
          <Label for="toolsFile">Select Screen Information</Label>
        </Col>
        <Col>
          <Input
            type="file"
            innerRef={(inputt) => (this.toolsInfo = inputt)}
            name="toolsInfo"
            id="toolsInfo"
            onChange={() => this.onToolsInfo()}
          />
        </Col>
      </FormGroup>
    );
    let metadataInput = (
      <FormGroup row style={rowStyle}>
        <Col sm={4}>
          <Label for="metadataFile">Select Screen Metadata</Label>
        </Col>
        <Col>
          <Input
            type="file"
            innerRef={(inputmd) => (this.metadtaFile = inputmd)}
            name="metadtaFile"
            id="metadtaFile"
            onChange={() => this.onMetadataFile()}
          />
        </Col>
      </FormGroup>
    );
    let parentMtdtInput = (
      <FormGroup row style={rowStyle}>
        <Col sm={4}>
          <Label for="toolsFile">Select Parent Metadata</Label>
        </Col>
        <Col>
          <Input
            type="file"
            innerRef={(inputp) => (this.parentMtdtInfo = inputp)}
            name="filterInfo"
            id="filterInfo"
            onChange={() => this.onFilterInfo()}
          />
        </Col>
      </FormGroup>
    );
    let childMtdtInput = (
      <FormGroup row style={rowStyle}>
        <Col sm={4}>
          <Label for="toolsFile">Select Child Metadata</Label>
        </Col>
        <Col>
          <Input
            type="file"
            innerRef={(inputc) => (this.childMtdtInfo = inputc)}
            name="filterInfo"
            id="filterInfo"
            onChange={() => this.onFilterInfo()}
          />
        </Col>
      </FormGroup>
    );
    let mockdataInput = (
      <FormGroup row style={rowStyle}>
        <Col sm={4}>
          <Label for="mockData">Select Screen Mock Data</Label>
        </Col>
        <Col>
          <Input
            type="file"
            innerRef={(inputdd) => (this.mockData = inputdd)}
            name="mockData"
            id="mockData"
            onChange={() => this.onMockDataFile()}
          />
        </Col>
      </FormGroup>
    );
    let fieldDataInput = (
      <FormGroup row style={rowStyle}>
        <Col sm={4}>
          <Label for="mockData">Select Form/Filter Field Data</Label>
        </Col>
        <Col>
          <Input
            type="file"
            innerRef={(inputfd) => (this.fieldData = inputfd)}
            name="mockData"
            id="mockData"
            onChange={() => this.onFieldDataFile()}
          />
        </Col>
      </FormGroup>
    );
    if (this.state.screenType === 1) {
      screenTypeInputs = (
        <Form>
          {scrInfoInput}
          {metadataInput}
          {mockdataInput}
        </Form>
      );
    } else if (this.state.screenType === 3) {
      screenTypeInputs = (
        <Form>
           {scrInfoInput}
           {metadataInput}
           {fieldDataInput}
           {mockdataInput}
        </Form>
      );
    }else if (this.state.screenType === 2) {
      screenTypeInputs = (
        <Form>
          {scrInfoInput}
          {parentMtdtInput}
          {childMtdtInput}
          {mockdataInput}
        </Form>
      );
    }
    return (
      <div>
        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={this.state.backdrop}
        >
          <ModalHeader toggle={this.toggle}>
            Test Harness
          </ModalHeader>
          <ModalBody>
            <Alert color="warning" isOpen={this.state.errorMessage != ""}>
              {this.state.errorMessage}
            </Alert>
            <Alert color="success" isOpen={this.state.validMessage != ""}>
              {this.state.validMessage}
            </Alert>
            <Jumbotron fluid style={{ padding: "1rem", marginBottom: "0rem" }}>
              <Container fluid>
                <Form>
                  <FormGroup row style={rowStyle}>
                      <Col sm={4}><Label for="filterType">Screen Type</Label></Col>
                      <Col sm={7}>
                      <ButtonGroup>
                          <Button outline color="info" size="sm" onClick={() => this.onScreenType(1)} active={this.state.screenType === 1}>RO Grid</Button>
                          <Button outline color="info" size="sm" onClick={() => this.onScreenType(3)} active={this.state.screenType === 3}>RO Filter / Type 1 Grid</Button>
                          <Button outline color="info" size="sm" onClick={() => this.onScreenType(2)} active={this.state.screenType === 2}>Type 2 Grid</Button>
                      </ButtonGroup>
                      </Col>
                  </FormGroup>
                  {screenTypeInputs}
                </Form>
              </Container>
            </Jumbotron>
          </ModalBody>
          <ModalFooter>
            <Button
              disabled={this.state.disablecancel}
              color="secondary"
              className="btn btn-primary mr-auto"
              onClick={() => this.metadataCancel()}
            >
              Cancel
            </Button>{" "}
            <Button onClick={() => this.onGenerateUIComp()} color="success">
              Test Metadata
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default TestHarness;