import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import DataSchema from "./Type1_custom_payments.json";
import ReusableGrid from "../../components/ReusableGrid";
import MockData from "../../components/MockData.json";
import Sidebar from "../../home/Sidebar";
import Welcome from "../../home/Welcome";
import { Provider } from "react-redux";
import configureStore from "../../../base/config/configureStore";
let store = configureStore();
import Modal from "../../components/Modal";

const dataSource = {
  datafields: DataSchema.griddef.dataFields,
  aysnc: false,
  datatype: "json",
  localdata: MockData
};

const formTitleStyle = {
  marginTop: "25px !important",
  fontWeight: "bold"
};

const CustomPaymentForm = props => {
  <Form>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input
        type="email"
        name="email"
        id="exampleEmail"
        placeholder="with a placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input
        type="password"
        name="password"
        id="examplePassword"
        placeholder="password placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleSelect">Select</Label>
      <Input type="select" name="select" id="exampleSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    </FormGroup>
  </Form>;
};
// const      //DataSchema.griddef.columns;

const linkrenderer = function(row, value, text) {
  console.log();
  var html = `<span > ${text}  </span>`;
  return html;
};

const editRow = () => {
  console.log("You just clicked a");
};
function onCellClick() {
  console.log("hello");
}

const source = new window.jqx.dataAdapter(dataSource);

class CustomPayments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: new window.jqx.dataAdapter(dataSource),
      code: "",
      type: "",
      name: "",
      taxability: "",
      maxLimit: ""
    };
    this.handleExit = () => {
      ReactDOM.render(
        <Provider store={store}>
          <div>
            <Col>
              <Sidebar handleLink={this.handleLink} />
            </Col>
            <Col>
              <Welcome />
            </Col>
          </div>
        </Provider>,
        document.querySelector("#" + "pageContainer")
      );
    };
    this.submitForm = e => {
      e.preventDefault();
      console.log("You just tried to submit form");
      console.log(this.state)

     //  dispatch to call api would go here

    };
    this.handleChange = async event => {
      const { target } = event;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const { name } = target;
      await this.setState({
        [name]: value
      });
    };
  }

   onRowClick(e) {
     console.log(e)
   }


  onLinkClick(row) {
    console.log(row);
    this.editrow = row;
    console.log()
    // const dataRecord = this.myGrid.current.getrowdata(this.editrow);
    // console.log(dataRecord)
  }

  cellsrender(ndex, datafield, value, defaultvalue, column, rowdata) {
    return `<a href="#"><div style="text-align:center;" class="align-self-center align-middle"><button type="button" style="padding-top:0.1rem;" class="btn btn-link align-self-center" onClick={(function() {console.log("hello")})}>${value}</button></div></a>`;
  }

  render() {
    const columns = [
      {
        text: "Custom Payment Code",
        datafield: "customPaymentCode",
        cellsalign: "center",
        width: "30%",
        align: "center",
        sortable: true,
        cellsrenderer: function(
          ndex,
          datafield,
          value,
          defaultvalue,
          column,
          rowdata
        ) {
          return `<a href="#"><div style="text-align:center;" class="align-self-center align-middle"><button  type="button" style="padding-top:0.1rem;" class="btn btn-link align-self-center" >${rowdata}</button></div></a>`;
        },
        buttonclick: console.log("Hello"),

        rendererInput: [
          {
            payName: "test",
            payCode: "PAYME",
            editMode: "2",
            payType: "E",
            taxability: "Taxable",
            eeMax: "0.00",
            erMax: "-",
            aggStatus: "N/A"
          }
        ],
        rendererStaticInput: [{ name: "", value: "" }]
      },
      { 
        buttonclick: (rowdata) => {
        this.onLinkClick(rowdata)
      },
      columntype: 'button',
    


        text: "Custom Payment Name",
        datafield: "customPaymentName",
        cellsalign: "center",
        align: "center"
      },
      {
        text: "Payment Type",
        datafield: "paymentType",
        cellsalign: "center",
        align: "center"
      },
      {
        text: "Taxability",
        datafield: "taxability",
        cellsalign: "center",
        align: "center"
      },
      {
        text: "EE Max",
        datafield: "eeMax",
        align: "right",
        cellsalign: "right"
      },
      {
        text: "Agg. Status",
        datafield: "aggStatus",
        align: "right",
        cellsalign: "right"
      }
    ];

    return (
      <div>
        <ReusableGrid
        ref={this.myGrid}
          data={DataSchema}
          source={source}
          columns={columns}
          exit={this.handleExit}
          select={this.onLinkClick}
          onRowClick={this.onRowClick}
        />

        <Modal>
          <Form
            style={{ padding: "25px 125px" }}
            onSubmit={e => this.submitForm(e)}
          >
            <FormGroup>
              <h3
                style={{
                  color: "#599153",
                  fontWeight: "bold",
                  fontSize: "1.5em"
                }}
              >
                Custom Payments
              </h3>
              <p
                style={
                  (formTitleStyle, { marginTop: "30px", fontWeight: "bold" })
                }
              >
                Enter Custom Payments
              </p>
              <Label for="code">Code *</Label>
              <Input
                type="input"
                name="code"
                id="code"
                placeholder="Enter code here"
                required
                onChange={e => this.handleChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="type">Type</Label>
              <Input
                type="select"
                name="type"
                id="type"
                onChange={e => this.handleChange(e)}
              >
                <option>Custom Earnings</option>
                <option>Custom Benefit Plan</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="name">Name *</Label>
              <Input
                type="input"
                name="name"
                id="name"
                placeholder="Enter name here"
                required
                onChange={e => this.handleChange(e)}
              />
            </FormGroup>

            <p
              style={
                (formTitleStyle, { marginTop: "50px", fontWeight: "bold" })
              }
            >
            
              Custom Earning Details
            </p>
            <FormGroup>
              <Label for="taxability">Taxability</Label>
              <Input
                type="select"
                name="taxability"
                id="taxability"
                onChange={e => this.handleChange(e)}
              >
                <option> Taxable</option>
                <option>Non-Taxable</option>
                <option>Limit-YTD</option>
                <option>Limit-QTD</option>
                <option>Limit-MTD</option>
                <option> Taxable/Exclude</option>
                <option>Imputed</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="max-limit">Maximum Limit</Label>
              <Input
                type="input"
                name="maxLimit"
                id="max-limit"
                placeholder="0.00"
                default="0.00"
                onChange={e => this.handleChange(e)}
              />
            </FormGroup>
            <div style={{ marginTop: "25px" }}>
              <Button color="primary" onClick={this.toggle}>
                Save
              </Button>
              <Button
                style={{ marginLeft: "15px", width: "70px" }}
                color="secondary"
                onClick={this.toggle}
              >
                Exit
              </Button>
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default CustomPayments;
