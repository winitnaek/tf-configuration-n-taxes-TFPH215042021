import React, { Component } from "react";
import RenderPage from '../../base/utils/renderPage';

class ReusablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const {pgid, help} = this.props;

    this.displayPage = (pgid, help) => {
        const page = RenderPage(pgid, help)
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
