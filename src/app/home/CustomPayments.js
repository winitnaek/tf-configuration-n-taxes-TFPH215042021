import React, { Component } from "react";
import { Col } from "reactstrap";
import MetaData from "../metadata/CUSTOM_PAYMENTS_METADATA.json"

import ReusableGrid from "../components/ReusableGrid"
import MockData from "../metadata/tempGridData/CUSTOM_PAYMENTS_MOCKDATA.json"
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

  render() {
    const columns = MetaData.griddef.columns;

    return (
    
      <div>
        <h1> Test </h1>
        <ReusableGrid
          data={MetaData}
      
          source={source}
          columns={columns}
          width="100%"
          exit={this.handleExit}
          info="info1"
        />
        </div>
    );
  }
}

export default CustomPayments;
