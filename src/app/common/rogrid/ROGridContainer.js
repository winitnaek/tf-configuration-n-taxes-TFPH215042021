import React from "react";
import RecordGrid from "./ROGrid";

class ROGridContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.getTitle = this.getTitle.bind(this);
  }
  getTitle() {
    return this.props.render.getTitle();
  }
  render() {
    return (
      <div>
        {<RecordGrid render={this.props.render} />}
      </div>
    );
  }
}
export default ROGridContainer;