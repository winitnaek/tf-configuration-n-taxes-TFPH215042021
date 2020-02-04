import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table
} from "reactstrap";
import JqxGrid from "../../deps/jqwidgets-react/react_jqxgrid";
import { getPayeeDetails } from "../../base/config/actions/payeeActions";
import { connect } from "react-redux";
import Data from "../home/mockdata.json";
import { Link, Redirect, withRouter } from "react-router-dom";

const style = {
  fontWeight: "bold",
  fontSize: "14px",
  display: "block",
  textAlign: "left"
};

const style2 = {
  fontWeight: "normal",
  marginLeft: "10px",
  textDecoration: "none",
  width: "100%"
};

const headerStyle = {
  backgroundColor: "lightblue",
  fontWeight: "bold",
  padding: "10px"
};
const headerStyle2 = {
  backgroundColor: "lightblue",
  fontWeight: "bold",
  textAlign: "left",

  width: "33%",
  marginTop: "15px"
};

let source = {};
const loadPdfData = () => {
  console.log("hello");
};

class JqxGridModal extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(props)
    let source = {
      datafields: this.props.datafields,
      aysnc: false,
      datatype: "json",
      localdata: this.props.details
    };

    this.loadPdfData = () => {
      console.log("hello");
    };

    this.renderLink = () => {
      console.log("trying to render link");
    };

    this.cellsrenderer = (
      row,
      columnfield,
      value,
      defaulthtml,
      columnproperties
    ) => {
      console.log(defaulthtml);

      return '<a href="/" >' + value + " </a>";
    };

    this.handleClick = () => {
      console.log("Howdy");
    };

    this.state = {
        isOpen: true,
      columns: [
        {
          text: "Authority",
          datafield: "authority",
          columntype: "button",
          cellsrenderer: function(
            ndex,
            datafield,
            value,
            defaultvalue,
            column,
            rowdata
          ) {
            return `<>
            ${rowdata.authority}
            </span>`;
          }
        },
        { text: "Tax Type", datafield: "taxType" },
        {
          text: "Amount",
          datafield: "amount",
          cellsformat: "c2",
          cellsalign: "right"
        }
      ],
      source: new window.jqx.dataAdapter(source),
    
    };

    this.close = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
  }
 

  componentDidMount() {
    console.log(this.props.open);
   
    this.setState({
      data: this.props.data,
      details: this.props.details
    });
    if (this.props.payeeData) {
      console.log(this.props);
      console.log(this.state);
    }
  }

  render() {
    console.log(this.props)

    const handleClick = value => {
      console.log(value);
    };

    let columns = [
      {
        text: "Authority",
        datafield: "authority",
        cellsrenderer: function(
          ndex,
          datafield,
          value,
          defaultvalue,
          column,
          rowdata
        ) {
          return `<span onClick={this.props.renderLink()}>
            ${rowdata.authority}
            </span>`;
          // },
          // buttonclick:  (ndex, datafield, value, defaultvalue, column, rowdata) => {
          //   //  datafield.preventDefault()
          //    // console.log(datafield.target.value)
          //    console.log(datafield.target.innerText)
          //    const link = (datafield.target.innerText)
          //   return (
          //     this.props.renderLink(link)

          //   )
        }
      },
      { text: "Tax Type", datafield: "taxType" },
      {
        text: "Amount",
        datafield: "amount",
        cellsformat: "c2",
        cellsalign: "right"
      }
    ];

    const {
      buttonLabel,
      className,
      data,
      close,
      payeeData,
      open,
      title,
      toggle
    } = this.props;

    const Style = {
      margin: "0 auto",
      width: "50%",
      top: "-200"
    };

    if (this.props.data && this.props.data.details) {
      this.setPropDataToState(this.props.data);
    }

    return (
      <div style={Style}>
          {console.log(this.props.open)}
        <Modal isOpen={this.state.isOpen} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle} style={headerStyle}>
            {" "}
            {title}
          </ModalHeader>
          <ModalBody>
            {this.props.children}
            <JqxGrid
              width="100%"
              source={this.state && this.state.source}
              columns={columns}
              pageable={true}
              autoheight={true}
              localization={this.state && this.state.localization}
              onCellclick={this.onCellclick}
            />
            <ModalFooter>
              <Button color="primary" onClick={e=> this.close()}>Close</Button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {details: state.data.payeeDetails.details,
          datafields: state.data.payeeDetails.datafields,
};
};

export default withRouter(connect(mapStateToProps, null)(JqxGridModal));
