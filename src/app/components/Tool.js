import React, { Component } from "react";
import { Row, Col,UncontrolledTooltip, Button, Badge,Fragment, Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from "reactstrap";
class Tool extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: this.props.items
    };
  }

  componentDidMount() {}

  render() {
    const { label, id, title, subTitle, items, toggle} = this.props
    return (
        <Col style={{ maxWidth: "33.3%" }}>
        <Card>
        <CardHeader>{title}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{subTitle}</CardTitle>
          <CardText>
          <ul>
            {items && items.map(item => (
            <li>
                <p className="m-0">{item.name}:</p>
                <ul>
                <li>Mapped: {item.mapped}</li>
                <li>Not mapped: {item.notMapped}</li>
                </ul>
            </li>
            ))}
          </ul>
          </CardText>
        </CardBody>
        <Button size="sm" className="ml-5 mr-5 mb-2" onClick={() => toggle(id, label)}>{label}</Button>
      </Card>
      </Col>
    );
  }
}
export default Tool;