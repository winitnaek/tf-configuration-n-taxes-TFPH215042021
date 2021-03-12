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
      <i class="fas fa-thumbtack fa-lg fa-1x"></i> Tax Locator
      </Button>
    );
    let calculateTaxes = (
      <Button  id="calculateTaxes" size="sm" color="primary" style={{marginRight:'20px'}} onClick={(event) => this.props.handlePdf(event)}>
      <i class="fas fa-calculator fa-lg fa-1x"></i> Calculate Taxes
      </Button>
    );
    let runLocatorService = (
      <Button id="runLocatorService" size="sm" color="primary" style={{marginRight:'20px'}} onClick={() => this.props.handleRunLocator('runLocatorService')}>
      <i class="fas fa-map-marker fa-lg fa-1x"></i> Run Locator Service
      </Button>
    );
    let addressFromWorksite = (
        <Button id="addressFromWorksite" size="sm" color="primary" style={{marginRight:'20px'}} onClick={() => this.props.handleRunLocator("addressFromWorksite")}>
        <i class="fas fa-address-card fa-lg fa-1x"></i> Get Address From Worksite
        </Button>
    );
    let deleteAll = (
      <Button id="deleteAll" color="primary" size="sm" style={{marginRight:'20px'}} onClick={() => this.props.handleDeleteAll(this.props.pageid)}>
        <i class="fas fa-calendar-minus fa-lg fa-1x"></i> Delete All
      </Button>
    );
    let findRedundantOverrides = (
      <Button id="findRedundantOverrides" size="sm" color="primary" style={{marginRight:'20px'}} onClick={() => this.props.handleRunLocator("findRedundantOverrides")}>
      <i class="fas fa-address-book fa-lg fa-1x"></i> Find Redundant Overrides
      </Button>
    );
    let updatePreferredStatus= (
      <Button id="updatePreferredStatus" size="sm" color="primary" style={{marginRight:'20px'}} onClick={() => this.props.handleUpdatePreferredStatus(this.props.pageid)}>
      <i class="fas fa-pencil-alt fa-lg fa-1x"></i> Update Preferred Status
      </Button>
    );
    if(this.props.pageid==='whatifEmp' || this.props.pageid==='whatifDeductionsBenefit' || this.props.pageid==='taxLocator'){ 
      //whatifEmp && whatifDeductionsBenefit && taxLocator
      taxLocator=null;
      calculateTaxes=null;
      runLocatorService=null;
      addressFromWorksite=null;
      findRedundantOverrides=null;
      updatePreferredStatus=null;
    }else if(this.props.pageid==='whatifTaxes' || this.props.pageid==='pensionWhatIfTaxes'){ //whatifTaxes
      runLocatorService=null;
      addressFromWorksite=null;
      deleteAll=null;
      findRedundantOverrides=null;
      updatePreferredStatus=null;
    }else if(this.props.pageid==='whatifGarnishment'){ //whatifEmpGarnishment
      taxLocator=null;
      runLocatorService=null;
      addressFromWorksite=null;
      findRedundantOverrides=null;
      deleteAll=null;
      updatePreferredStatus=null;
    }else if(this.props.pageid==='whatifLocations'){ //taxLocatorLocation
      taxLocator=null;
      calculateTaxes=null;
      findRedundantOverrides=null;
      updatePreferredStatus=null;
    }else if(this.props.pageid==='addressOverrides'){ //addressOverrides
      taxLocator=null;
      calculateTaxes=null;
      runLocatorService=null;
      addressFromWorksite=null;
      deleteAll=null;
      updatePreferredStatus=null;
    } else if(this.props.pageid==='mapTaxType' || this.props.pageid=== 'mapTaxCode'){//mapTaxType
      taxLocator=null;
      calculateTaxes=null;
      runLocatorService=null;
      addressFromWorksite=null;
      deleteAll=null;
      findRedundantOverrides=null;
    }
    if(this.props.pageid==='whatifDeductionBenefits'){//whatifDeductionBenefits
      taxLocator=null;
      calculateTaxes=null;
      runLocatorService=null;
      addressFromWorksite=null;
      findRedundantOverrides=null;
      updatePreferredStatus=null;
    }
    let permissions = this.props.permissions(this.props.pid);
    return (
      <Row className="justify-content-center" style={{ paddingTop: "3px",paddingBottom:'2px',marginTop:'15px',borderRadius:'0.25rem'}}>
        {taxLocator}
        {permissions && permissions.RUN ? (calculateTaxes):null}
        {runLocatorService}
        {addressFromWorksite}
        {permissions && permissions.DELETE ? (deleteAll):null}
        {findRedundantOverrides}
        {updatePreferredStatus}
      </Row>
    );
  }
  render() {
    return (<div>{this.renderButtonBarForPage()}</div>);
  }
}
export default ButtonBar;