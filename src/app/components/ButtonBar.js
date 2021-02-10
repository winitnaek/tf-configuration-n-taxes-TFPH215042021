import React, { Component } from "react";
import { Row, UncontrolledTooltip,Button, Badge } from "reactstrap";
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
      <Button id="taxLocator" size="sm" color="primary" style={{marginRight:'20px'}} onClick={() => this.props.handleTaxLocator()}>
      <Badge color="secondary"><i class="fas fa-thumbtack fa-lg fa-2x"></i></Badge> Tax Locator
      </Button>
    );
    let calculateTaxes = (
      <Button  id="calculateTaxes" size="sm" color="primary" style={{marginRight:'20px'}} onClick={(event) => this.props.handlePdf(event)}>
      <Badge color="secondary"><i class="fas fa-calculator fa-lg fa-2x"></i></Badge> Calculate Taxes
      </Button>
    );
    let runLocatorService = (
      <Button id="runLocatorService" size="sm" color="primary" style={{marginRight:'20px'}} onClick={() => this.props.handleRunLocator('runLocatorService')}>
      <Badge color="secondary"><i class="fas fa-map-marker fa-lg fa-2x"></i></Badge> Run Locator Service
      </Button>
    );
    let addressFromWorksite = (
        <Button id="addressFromWorksite" size="sm" color="primary" style={{marginRight:'20px'}} onClick={() => this.props.handleRunLocator("addressFromWorksite")}>
        <Badge color="secondary"><i class="fas fa-address-card fa-lg fa-2x"></i></Badge> Get Address From Worksite
        </Button>
    );
    let deleteAll = (
      <Button id="deleteAll" color="primary" size="sm" style={{marginRight:'20px'}} onClick={() => this.props.handleDeleteAll(this.props.pageid)}>
        <Badge color="secondary"><i class="fas fa-calendar-minus fa-lg fa-2x"></i></Badge> Delete All
      </Button>
    );
    let findRedundantOverrides = (
      <Button id="findRedundantOverrides" size="sm" color="primary" style={{marginRight:'20px'}} onClick={() => this.props.handleRunLocator("findRedundantOverrides")}>
      <Badge color="secondary"><i class="fas fa-address-book fa-lg fa-2x"></i></Badge> Find Redundant Overrides
      </Button>
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
      <Row className="justify-content-center" style={{ paddingTop: "3px",paddingBottom:'2px',marginTop:'15px',borderRadius:'0.25rem'}}>
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