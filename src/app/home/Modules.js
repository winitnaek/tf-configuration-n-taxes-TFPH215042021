import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "reactstrap";
import {
  getModuleLinks,
  setModuleLinks
} from "../../base/config/actions/moduleLinksActions";


// Move to external
const Container = {
    width: "60%",
    margin: "0 auto"
}

const Header = {
    marginLeft: "95px"
}

const ButtonStyle = {
    height: "150px",
    width: "150px",
    marginLeft: "10px",
    padding: "10px",
    marginTop: "25px"
}

class Modules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };


    this.setOptions = options => {
        console.log(options)
        this.setState({
            options: options,
        })
    }

    this.handleClick = module => {
      console.log(module);
      console.log(this.props.modules);
      let payload;

      switch (module) {
        case "All":
          var newArray = this.props.modules.filter(el => {
            return el.name === "All";
          });
          console.log(newArray);
          payload = newArray[0].areas;
          this.props.setModuleLinks(payload);
          this.setOptions(payload)
          break;
        case "Mapping Tools":
          var newArray = this.props.modules.filter(el => {
            return el.name === "Mapping Tools";
          });
          console.log(newArray[0].areas);
          payload = newArray[0].areas;

          this.props.setModuleLinks(payload);
          
          this.setOptions(payload)

          break;
          case "Reporting Tools":
          var newArray = this.props.modules.filter(el => {
            return el.name === "Reporting Tools";
          });
          console.log(newArray[0].areas);
          payload = newArray[0].areas;

          this.props.setModuleLinks(payload);
          this.setOptions(payload)

          break;
          default: 
          break;
      }

      console.log(module);
    };

   this.displayList = () => {

   }


  }

  render() {
    {console.log(this.state.options)}
    return (
      <div style={Container}>
          <h3 style={Header}>  Please Choose a Module </h3> 
        <Button color="primary" style={ButtonStyle} onClick={e => this.handleClick("All")}> All </Button>
        <Button color="primary" style={ButtonStyle} onClick={e => this.handleClick("Mapping Tools")}>
          Mapping Tools
        </Button>
        <Button  color="primary" style={ButtonStyle} onClick={e => this.handleClick("Reporting Tools")}>
          Reporting Tools
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modules: state.data.moduleLinks.modules
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getModuleLinks, setModuleLinks }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Modules);
