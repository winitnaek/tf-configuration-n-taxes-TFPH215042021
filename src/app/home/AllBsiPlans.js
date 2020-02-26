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
import MetaData from "../metadata/ALL_BSI_PLANS_METADATA.json"

import ReusableGrid from "../components/ReusableGrid"// ../../../components//ReusableGrid";
import MockData from "../metadata/tempGridData/ALL_BSI_PLANS_MOCKDATA.json"
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

class AllBsiPlans extends Component {
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
    
        <ReusableGrid
          data={MetaData}
          theme="energyblue"
          source={source}
          columns={columns}
          width="100%"
          exit={this.handleExit}
          info="info1"
          type="readOnly"
        />
        
    );
  }
}

export default AllBsiPlans;
