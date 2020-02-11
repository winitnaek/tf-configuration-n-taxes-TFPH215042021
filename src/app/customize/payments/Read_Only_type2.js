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
      console.log(this.state);

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





  render() {
    const columns = [
      {
        text: "Custom Payment Code",
        datafield: "customPaymentCode",
        cellsalign: "center",
        width: "20%",
        align: "center",
        sortable: true,

      },
      {
        text: "Custom Payment Name",
        width: "20%",
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
      <Modal >
          <h3>  This is a Read Only type 2</h3>
        <ReusableGrid
          data={DataSchema}
          source={source}
          columns={columns}
          exit={this.handleExit}
          select={this.onLinkClick}
        />
      </Modal>
    );
  }
}

export default CustomPayments;
