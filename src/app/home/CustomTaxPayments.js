import React, { Component } from "react";
import { Col, UncontrolledTooltip } from "reactstrap";
import MetaData from "../metadata/CUSTOM_TAX_PAYMENT_METADATA.js"

import ReusableGrid from "../components/ReusableGrid"
import MockData from "../metadata/tempGridData/CUSTOM_TAX_PAYMENT_MOCKDATA.json"
import Sidebar from "../home/Sidebar";
import Welcome from "../home/Welcome";
import { Provider } from "react-redux";
import configureStore from "../../base/config/configureStore";
let store = configureStore();


const dataSource = {
  datafields: MetaData.griddef.dataFields,
  aysnc: false,
  datatype: "json",
  localdata: MockData
};

const source = new window.jqx.dataAdapter(dataSource);

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

  componentDidMount(){
  //   const editIcon = window.document.getElementsByClassName("edit-icon")
 
    
  //  if (editIcon !== undefined) {
  //     window.document.getElementsByClassName("edit-icon").style.color="#4c7392"
  // }






}

  render() {
    // const columns = MetaData.griddef.columns;


    const myStyle = {
      padding: "5px"
    }

    const columns = MetaData.griddef.columns;

    return (
    
      <div>
        <ReusableGrid
          data={MetaData}
          source={source}
          columns={columns}
          width="100%"
          exit={this.handleExit}
        />
        </div>
    );
  }
}

export default CustomPayments;
