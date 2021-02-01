import React, { Component } from "react";
import { Row, UncontrolledTooltip } from "reactstrap";
class ButtonBar extends Component {
  constructor(props) {
    super(props);
    let pageid = this.props.pageid;
    let pid =  this.props.pid;
    let metadata =  this.props.metadata;
    let permissions = this.props.permissions;
    let tftools = this.props.tftools;
  }

  componentDidMount() {}

  renderButtonBarForPage() {
    let taxLocator = (
      <div>
        <a href="#" id="taxLocator" onClick={() => this.props.handleTaxLocator()}>
          <i class="fas fa-thumbtack fa-lg fa-2x"></i>
        </a>
        <UncontrolledTooltip placement="right" target="taxLocator">
          <span> Tax Locator </span>
        </UncontrolledTooltip>
      </div>
    );
    let calculateTaxes = (
      <div>
        <a href="#" id="calculateTaxes" onClick={(event) => this.props.handlePdf(event)}>
          <i class="fas fa-calculator fa-lg fa-2x"></i>
        </a>
        <UncontrolledTooltip placement="right" target="calculateTaxes">
          <span> Calculate Taxes </span>
        </UncontrolledTooltip>
      </div>
    );
    let runLocatorService = (
      <div>
        <a href="#" id="runLocatorService" onClick={() => this.props.handleRunLocator('runLocatorService')}>
          <i class="fas fa-map-marker fa-lg fa-2x"></i>
        </a>
        <UncontrolledTooltip placement="right" target="runLocatorService">
          <span> Run Locator Service </span>
        </UncontrolledTooltip>
      </div>
    );
    let addressFromWorksite = (
      <div>
        <a href="#" id="addressFromWorksite" onClick={() => this.props.handleRunLocator("addressFromWorksite")}>
          <i class="fas fa-address-card fa-lg fa-2x"></i>
        </a>
        <UncontrolledTooltip placement="right" target="addressFromWorksite">
          <span> Get Address From Worksite </span>
        </UncontrolledTooltip>
      </div>
    );
    let deleteAll = (
      <div>
        <a href="#" id="deleteAll" onClick={() => this.props.handleDeleteAll(this.props.pageid)}>
          <i class="fas fa-calendar-minus fa-lg fa-2x"></i>
        </a>
        <UncontrolledTooltip placement="right" target="deleteAll">
          <span>Delete All</span>
        </UncontrolledTooltip>
      </div>
    );
    let findRedundantOverrides = (
      <div>
        <a href="#" id="findRedundantOverrides" onClick={() => this.props.handleRunLocator("findRedundantOverrides")}>
          <i class="fas fa-address-book fa-lg fa-2x"></i>
        </a>
        <UncontrolledTooltip placement="right" target="findRedundantOverrides">
          <span>Find Redundant Overrides</span>
        </UncontrolledTooltip>
      </div>
    );
    if(this.props.pageid==='whatifEmp' || this.props.pageid==='whatifDeductionsBenefit' && this.props.pageid==='taxLocator'){ 
      //whatifEmp && whatifDeductionsBenefit && taxLocator
      taxLocator=null;
      calculateTaxes=null;
      runLocatorService=null;
      addressFromWorksite=null;
      findRedundantOverrides=null;
    }else if(this.props.pageid==='whatifTaxes' || this.props.pageid==='pensionWhatIfTaxes'){ //whatifTaxes
      runLocatorService=null;
      addressFromWorksite=null;
      deleteAll=null;
      findRedundantOverrides=null;
    }else if(this.props.pageid==='whatifGarnishment'){ //whatifEmpGarnishment
      taxLocator=null;
      runLocatorService=null;
      addressFromWorksite=null;
      findRedundantOverrides=null;
      deleteAll=null;
    }else if(this.props.pageid==='whatifLocations'){ //taxLocatorLocation
      taxLocator=null;
      calculateTaxes=null;
      deleteAll = null
      findRedundantOverrides=null;
    }else if(this.props.pageid==='addressOverrides'){ //addressOverrides
      taxLocator=null;
      calculateTaxes=null;
      runLocatorService=null;
      addressFromWorksite=null;
      deleteAll=null;
    }
    if(this.props.pageid==='whatifDeductionBenefits'){//whatifDeductionBenefits
      taxLocator=null;
      calculateTaxes=null;
      runLocatorService=null;
      addressFromWorksite=null;
      findRedundantOverrides=null;
    }
    return (
      <Row className="justify-content-around bg-light" style={{ paddingTop: "3px",paddingBottom:'2px',marginTop:'30px',borderRadius:'0.25rem'}}>
        {taxLocator}
        {calculateTaxes}
        {runLocatorService}
        {addressFromWorksite}
        {deleteAll}
        {findRedundantOverrides}
      </Row>
    );
  }
  render() {
    return (<div>{this.renderButtonBarForPage()}</div>);
  }
}
export default ButtonBar;