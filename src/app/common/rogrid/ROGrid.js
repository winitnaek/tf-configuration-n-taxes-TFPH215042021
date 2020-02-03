import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, FormGroup, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import JqxGrid from '../../deps/jqwidgets-react/react_jqxgrid';
import { checkRecordCount, getRecords } from './action';

class ROGrid extends Component {
    constructor(props) {
        super(props);
        let source = {
            datatype: "json",
            datafields: this.props.render.getDataFields(),
            contenttype: "application/json",
            beforeprocessing: function (data) {
                if (data != null && data.length > 0) {
                    source.totalrecords = data[0].totalRecords;
                }

            }
        };
        this.state = {
            matchedRecords: [],
            selectedRecord: {},
            searchInstr: true,
            isAutocomplete: false,
            isPagination: false,
            resultsShown: false,
            searchResultStatus: 0,
            noRecsFound: false,
            tooManyRecsFound: false,
            source: source
        };
        this.displaySearchInstr = this.displaySearchInstr.bind(this);
        this.displayTooManyResultsTxt = this.displayTooManyResultsTxt.bind(this);
        this.displayNoResultsFoundTxt = this.displayNoResultsFoundTxt.bind(this);
        this.onAutocompleteRecChange = this.onAutocompleteRecChange.bind(this);
        this.checkRecordCount = this.checkRecordCount.bind(this);
        this.getColumns = this.getColumns.bind(this);
        this._handleKeyDown=this._handleKeyDown.bind(this);
    }
    /**
     * Displayed above the search input field.
     */
    displaySearchInstr() {
        return this.props.render.getSearchInstr();
    }
    displayTooManyResultsTxt() {
        return this.props.render.getTooManyResultsTxt();
    }
    displayNoResultsFoundTxt() {
        return this.props.render.getNoResultsFoundTxt();
    }
    onAutocompleteRecChange() {

    }
    checkRecordCount(input, isSearchable) {
        let searchInput = '';
        if (isSearchable) {
            searchInput = this.props.render.getSearchInput(this.searchPatRaw.value);
        }
        else {
            searchInput = input;
        }

        console.debug('in component checkRecordCount: search input=[', searchInput, '].');
        if (this.props.render.getRecCountSvcURL) {
            this.props.actions.checkRecordCount(searchInput,
                this.props.render.getRecCountSvcURL, this.props.render.getRecordsSvcURL);

            console.log(this.state.matchedRecords.length);
            console.log(this.state.matchedRecord);
        }
        else {
            this.props.actions.getRecords(searchInput, this.props.render.getRecordsSvcURL, true);
        }

    }

    componentDidMount() {
        const isSearchable = this.props.render.isSearchable();
        if (!isSearchable) {
            let dataset = appDataset();
            let selTran = this.props.tranData.transmitterData.transmitter;
            let fein = selTran && selTran.fein ? selTran.fein : " ";
            let selBank = this.props.bankData.selectedBank;
            let routno = selBank && selBank.routingNumber ? selBank.routingNumber : " ";

            let searchInput = {
                "dataset": dataset,
                "fein": fein,
                "routingNumber": routno
            };
            this.checkRecordCount(searchInput, isSearchable);
        }

    }
    componentWillReceiveProps(newProps) {
        if (newProps.lookupData && newProps.lookupData.noRecsFound) {
            this.state.noRecsFound = true;
        } else {
            this.state.noRecsFound = false;
        }

        if (newProps.lookupData && newProps.lookupData.tooManyRecsFound) {
            this.state.tooManyRecsFound = true;
        } else {
            this.state.tooManyRecsFound = false;
        }

        if (newProps.lookupData && newProps.lookupData.records && newProps.lookupData.records.length) {
            this.state.matchedRecords = newProps.lookupData.records;
            this.state.source.localdata = this.state.matchedRecords;
        } else {
            this.state.matchedRecords = [];
        }
    }
    componentDidUpdate() {
        let gridObj = document.querySelector("div[role='grid']");

        if (gridObj) {
            let _gridID = gridObj.id;
            let _gridObj = $('#' + _gridID);

            if (_gridObj) {
                _gridObj.jqxGrid('updatebounddata');
            }
        }
    }
    getColumns() {
        return this.props.render.getColumns();
    }
    _handleKeyDown(event){
        if (event.keyCode === 13) {
            event.preventDefault(); // Let's stop this event.
            event.stopPropagation(); // Really this time.
            this.checkRecordCount('', true);
          }
    }
    render() {
        const isSearchable = this.props.render.isSearchable();
        let source = this.state.source;
        let dataAdapter = new $.jqx.dataAdapter(source, {
            downloadComplete: function (data, status, xhr) {
                if (!source.totalrecords) {
                    source.totalrecords = data.length;
                }
            },
            loadError: function (xhr, status, error) {
                throw new Error(error);
            }
        });
        if (isSearchable) {
            return (<div>

                <Form>
                    {this.state.searchInstr ? (
                        <FormGroup row>
                            <Col sm={12} md={{ size: 10 }} style={{ zIndex: 99 }}>
                                <small id="searchInstr" class="form-text text-muted">{this.displaySearchInstr()}</small>
                            </Col>
                        </FormGroup>
                    ) : null}
                    <FormGroup row>
                        <Col sm={12} md={{ size: 8 }} className="input-group" style={{ zIndex: 99 }}>
                            <Input type="text" name="searchPatFld" id="searchPatFld"
                                innerRef={(searchPatRaw) => this.searchPatRaw = searchPatRaw} onKeyDown={this._handleKeyDown}/>
                            <div class="input-group-append">
                                <Button className="btn-outline-secondary" size="sm" onClick={() => this.checkRecordCount('', true)}>
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </Button>
                            </div>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={12} md={{ size: 12 }} style={{ zIndex: 99 }}>
                            {this.state.tooManyRecsFound ? (
                                <small id="tooManyRecsTxt" class="form-text text-muted">{this.displayTooManyResultsTxt()}</small>
                            ) : null}
                            {this.state.noRecsFound ? (
                                <small id="noRecsFoundTxt" class="form-text text-muted">{this.displayNoResultsFoundTxt()}</small>
                            ) : null}
                            {this.state.matchedRecords && this.state.matchedRecords.length ? (
                                <JqxGrid ref='recordsGrid'
                                    width={'100%'} source={dataAdapter} pageable={true}
                                    pagesizeoptions={['10', '25', '50']}
                                    sortable={true} altrows={true} enabletooltips={false}
                                    autoheight={false} editable={false} columns={this.getColumns()}
                                    filterable={true} showfilterrow={true} />
                            ) : null}
                        </Col>
                    </FormGroup>
                </Form>
            </div>);
        }
        else {
            return (<div>


                {this.state.matchedRecords && this.state.matchedRecords.length ? (
                    <JqxGrid ref='recordsGrid'
                        width={'100%'} source={dataAdapter} pageable={true}
                        pagesizeoptions={['10', '25', '50']}
                        sortable={true} altrows={true} enabletooltips={false}
                        autoheight={false} editable={false} columns={this.getColumns()}
                        filterable={true} showfilterrow={true} />
                ) : null}

            </div>);
        }
    }
}

function mapStateToProps(state) {
    return {
        /* Add actual properties!! */
        lookupData: state.lookupData,
        bankData: state.bankData,
        tranData: state.transmitterWizardData
    };
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ checkRecordCount: checkRecordCount, getRecords: getRecords }, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(ROGrid);