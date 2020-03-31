import React, { Component } from "react";
import {renderPage} from '../../base/utils/renderPage';

class ReusablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.displayPage = (pgid, help) => {
        const page = renderPage(pgid, help)
      return page;
    }
  }
  render() {
    const {pgid, help} = this.props;
    return  (
        <div>
            {this.displayPage(pgid, help)}

        </div>
    )

    
  }
} 

export default ReusablePage;
