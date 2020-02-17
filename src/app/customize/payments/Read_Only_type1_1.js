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
import DataSchema2 from "./Type1_custom_payments2.json";
import ReusableGrid from "../../components/ReusableGrid";
import MockData from "../../components/MockData.json";
import MockData2 from "../../components/MockData2.json";
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

const dataSource2 = {
  datafields: DataSchema2.griddef.dataFields,
  aysnc: false,
  datatype: "json",
  localdata: MockData2
};

const source = new window.jqx.dataAdapter(dataSource);
const source2 = new window.jqx.dataAdapter(dataSource2);

class CustomPayments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: new window.jqx.dataAdapter(dataSource)
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

    const columns2 = [
      {
        text: "BSI Payment Code",
        datafield: "customPaymentCode",
        cellsalign: "center",
        width: "30%",
        align: "center",
        sortable: true,

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
        text: "Name",
        datafield: "customPaymentName",
        cellsalign: "center",
        align: "center"
      },
      {
        text: "State",
        datafield: "paymentType",
        cellsalign: "center",
        align: "center"
      }
    ];

    return (
    
        <div style={{ margin: "0 auto", width: "70%" }}>
          <ReusableGrid
            data={DataSchema2}
            source={source2}
            columns={columns2}
            exit={this.handleExit}
            info="info2"
          />
        </div>
    );
  }
}

export default CustomPayments;
