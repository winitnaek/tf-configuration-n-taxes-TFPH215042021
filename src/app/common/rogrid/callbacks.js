import * as svcs from '../../base/constants/ServiceUrls';

export const renderTransmitterSearch = {
    getTitle() {
        return "Transmitters";
    },
    getSearchInstr() {
        return `Search for Transmitter by entering a minimum of one character.`;
    },

    getTooManyResultsTxt() {
        return `There are too many results to be displayed.
            Enter additional criteria to refine the search.`;
    },

    getNoResultsFoundTxt() {
        return `No items found. Try searching with different criteria.`;
    },

    getColumns() {
        return [
            {
                text: 'Transmitter', datafield: 'transmitterName', cellsalign: 'center', width: 'auto', align: 'center', width: '30%',
                cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    return `<a href="#" title="${rowdata.transmitterName + ' artifacts'}"><div style="text-align:center;" class="align-self-center align-middle"><button type="button" style="padding-top:0.1rem;" class="btn btn-link align-self-center" onClick={onTxmtSearchCellClick('${encodeURI(rowdata.transmitterName)}','${rowdata.transmitterFein}')}>${rowdata.transmitterName}</button></div></a>`;
                }
            },
            { text: 'EIN', datafield: 'transmitterFein', cellsalign: 'center', width: 'auto', align: 'center', width: '40%' },
            {
                text: 'City, State', filterable: false, datafield: 'transmitterCity', cellsalign: 'center', width: 'auto', align: 'center', width: '30%', cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    return `<div style="text-align:center;padding-top:0.3rem;" class="align-self-center align-middle">${rowdata.transmitterCity}${', '}${rowdata.transmitterState}</div>`;
                }
            }
        ];
    },
    getDataFields() {
        return [
            { name: 'transmitterName', type: 'string' },
            { name: 'transmitterFein', type: 'string' },
            { name: 'transmitterCity', type: 'string' },
            { name: 'transmitterState', type: 'string' }
        ];
    },

    getSearchInput(spatIn) {
        let dataset = appDataset();
        let fein = '';
        let spat = "" != spatIn.trim() ? spatIn : '%';
        let searchInput = {
            "dataset": dataset,
            "fein": fein,
            "sp": spat
        };
        return searchInput;
    },

    getRecordsSvcURL(input) {
        let parameters = `${'?dataset='}${input.dataset}${'&searchPattern='}${input.sp}`;
        return `${svcs.FIND_MATCHING_TXMT}${parameters}`;
    },
    isTreeGrid() {
        return false;
    },
    isSearchable() {
        return true;
    }
}
export const renderGarnishmentAccounts = {
    getTitle() {
        return "Company Garnishment Accounts";
    },
    getSearchInstr() {
        return `Search for Accounts by Authority Code or Authority Name
        At least one search criteria is required.`;
    },

    getTooManyResultsTxt() {
        return `There are too many results to be displayed.
            Enter additional criteria to refine the search.`;
    },

    getNoResultsFoundTxt() {
        return `No garnishment accounts found. Try searching with different criteria. Click Authority Name to select.`;
    },

    getColumns() {
        return [
            { text: 'BSIAUTH', datafield: 'bsiAuth', cellsalign: 'center', width: 'auto', align: 'center', width: '15%' },
            {
                text: 'Authority Name', datafield: 'bsiAuthName', cellsalign: 'center', width: 'auto', align: 'center', width: '30%',
                cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    var uriauthname = rowdata.bsiAuthName;
                    let encAuthName = encodeURI(uriauthname);
                    var uritaxname = rowdata.taxName;
                    let encTaxName = encodeURI(uritaxname);
                    return `<a href="#" title="${rowdata.bsiAuthName + ' artifacts'}"><div style="text-align:center;" class="align-self-center align-middle"><button type="button" style="padding-top:0.1rem;" class="btn btn-link align-self-center" onClick={onGarnAcctSearchCellClick('${encAuthName}','${encTaxName}','${rowdata.bsiAuth}','${rowdata.taxType}')}>${rowdata.bsiAuthName}</button></div></a>`;
                }
            },
            { text: 'Tax Type', datafield: 'taxName', cellsalign: 'center', width: 'auto', align: 'center', width: '40%' },
            { text: 'Account Number', datafield: 'account', cellsalign: 'center', width: 'auto', align: 'center', width: '15%' },
            { text: 'Taxtype', datafield: 'taxType', hidden: true }
        ];
    },

    getDataFields() {
        return [
            { name: 'bsiAuth', type: 'string' },
            { name: 'bsiAuthName', type: 'string' },
            { name: 'taxName', type: 'string' },
            { name: 'account', type: 'string' },
            { name: 'taxType', type: 'string' }
        ];
    },

    getSearchInput(spatIn) {
        let dataset = appDataset();
        let fein = JSON.parse(sessionStorage.getItem('selcomp')).fein;
        let spat = "" != spatIn.trim() ? spatIn : '%';
        let searchInput = {
            "dataset": dataset,
            "fein": fein,
            "sp": spat
        };
        return searchInput;
    },

    getRecCountSvcURL(input) {
        let parameters = `${'?dataset='}${input.dataset}${'&fein='}${input.fein}${'&pat='}${input.sp}${'&acctType=G'}`;
        return `${svcs.GET_LKP_TAX_ACCOUNT_COUNT}${parameters}`;
    },

    getRecordsSvcURL(input) {
        let parameters = `${'?dataset='}${input.dataset}${'&fein='}${input.fein}${'&pat='}${input.sp}${'&acctType=G'}`;
        return `${svcs.GET_LKP_TAX_ACCOUNTS}${parameters}`;
    },
    isTreeGrid() {
        return false;
    },
    isSearchable() {
        return true;
    }
}
export const renderTaxAccount = {
    getTitle() {
        return "Company Tax Accounts";
    },

    getSearchInstr() {
        return `Search for Accounts by Authority Code or Authority Name
        At least one search criteria is required.`;
    },

    getTooManyResultsTxt() {
        return `There are too many results to be displayed.
            Enter additional criteria to refine the search.`;
    },

    getNoResultsFoundTxt() {
        return `No items found. Try searching with different criteria.`;
    },

    getColumns() {
        return [
            { text: 'Authority Code', datafield: 'bsiAuth', cellsalign: 'center', width: 'auto', align: 'center', width: '15%' },
            {
                text: 'Authority Name', datafield: 'bsiAuthName', cellsalign: 'center', width: 'auto', align: 'center', width: '30%',
                cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    // console.debug('rowdata=>', JSON.stringify(rowdata));

                    return `<a href="#" title="${rowdata.bsiAuthName + ' artifacts'}"><div style="text-align:center;" class="align-self-center align-middle"><button type="button" style="padding-top:0.1rem;" class="btn btn-link align-self-center" onClick={onTaxAccountSelect('${rowdata.bsiAuth}','${rowdata.taxType}','${rowdata.acctType}')}>${rowdata.bsiAuthName}</button></div></a>`;
                }
            },
            { text: 'Tax Type', datafield: 'taxName', cellsalign: 'center', width: 'auto', align: 'center', width: '40%' },
            { text: 'Account Number', datafield: 'account', cellsalign: 'center', width: 'auto', align: 'center', width: '15%' }
        ];
    },

    getDataFields() {
        return [
            { name: 'bsiAuth', type: 'string' },
            { name: 'bsiAuthName', type: 'string' },
            { name: 'taxName', type: 'string' },
            { name: 'account', type: 'string' },
            { name: 'taxType', type: 'string' },
            { name: 'acctType', type: 'string' }
        ];
    },

    getSearchInput(spatIn) {
        let dataset = appDataset();
        let fein = JSON.parse(sessionStorage.getItem('selcomp')).fein;
        let spat = "" != spatIn.trim() ? spatIn : '%';
        let searchInput = {
            "dataset": dataset,
            "fein": fein,
            "sp": spat
        };
        return searchInput;
    },

    getRecCountSvcURL(input) {
        let parameters = `${'?dataset='}${input.dataset}${'&fein='}${input.fein}${'&pat='}${input.sp}${'&acctType='}`;
        return `${svcs.GET_LKP_TAX_ACCOUNT_COUNT}${parameters}`;
    },

    getRecordsSvcURL(input) {
        let parameters = `${'?dataset='}${input.dataset}${'&fein='}${input.fein}${'&pat='}${input.sp}${'&acctType='}`;
        return `${svcs.GET_LKP_TAX_ACCOUNTS}${parameters}`;
    },
    isTreeGrid() {
        return false;
    },

    isSearchable() {
        return true;
    }
};

export const renderPayAgent = {
    getTitle() {
        return "Pay Agent/Master";
    },

    getSearchInstr() {
        return `Search for Pay Agent/Master by entering a minimum of one character.`;
    },

    getTooManyResultsTxt() {
        return `There are too many results to be displayed.
            Enter additional criteria to refine the search.`;
    },

    getNoResultsFoundTxt() {
        return `No items found. Try searching with different criteria.`;
    },

    getColumns() {
        return [
            {
                text: 'Pay Agent / Master', datafield: 'companyName', cellsalign: 'center', width: 'auto', align: 'center', width: '60%',
                cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    let companyInfoAsJSON = encodeURIComponent(JSON.stringify({
                        "companyFein": rowdata.companyFein,
                        "companyName": rowdata.companyName
                    }));
                    return `<a href="#" title="${rowdata.companyName + ' artifacts'}"><div style="text-align:center;" class="align-self-center align-middle"><button type="button" style="padding-top:0.1rem;" class="btn btn-link align-self-center" onClick={onPayAgentSelect('${companyInfoAsJSON}')}>${rowdata.companyName}</button></div></a>`;
                }
            },
            { text: 'Agent ID', datafield: 'companyId', cellsalign: 'center', width: 'auto', align: 'center', width: '15%' },

            { text: 'EIN', datafield: 'companyFein', cellsalign: 'center', width: 'auto', align: 'center', width: '10%' },
            {
                text: 'City, State', filterable: false, datafield: ['companyCity '], cellsalign: 'center', width: 'auto', align: 'center', width: '15%',
                cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    return `<div style="text-align:center; margin-top: 8px;">${rowdata.companyCity} ,${rowdata.companyState}</div>`;
                }
            }
        ];
    },

    getDataFields() {
        return [
            { name: 'companyName', type: 'string' },
            { name: 'companyId', type: 'string' },
            { name: 'companyFein', type: 'string' },
            { name: 'companyCity', type: 'string' },
            { name: 'companyState', type: 'string' }
        ];
    },

    getSearchInput(spatIn) {
        let dataset = appDataset();
        let fein = JSON.parse(sessionStorage.getItem('selcomp')).fein;
        let spat = spatIn && "" != spatIn.trim() ? spatIn : '';
        let searchInput = {
            "dataset": dataset,
            "fein": fein,
            "sp": spat
        };
        return searchInput;
    },
    getRecCountSvcURL(input) {
        let parameters = `${'?pattern='}${input.sp}${'&dataset='}${input.dataset}`;
        return `${svcs.GET_COMPANY_BY_PATTERN_COUNT}${parameters}`;
    },

    getRecordsSvcURL(input) {
        let parameters = `${'?dataset='}${input.dataset}${'&pattern='}${input.sp}`;
        return `${svcs.GET_COMPANY_BY_PATTERN}${parameters}`;
    },
    isTreeGrid() {
        return false;
    },

    isSearchable() {
        return true;
    }
};

export const renderCompanySearch = {
    getTitle() {
        return "Company Search";
    },

    getSearchInstr() {
        return `Search for Companies by Company fein or Company Name
        At least one search criteria is required.`;
    },

    getTooManyResultsTxt() {
        return `There are too many results to be displayed.
            Enter additional criteria to refine the search.`;
    },

    getNoResultsFoundTxt() {
        return `No items found. Try searching with different criteria.`;
    },

    getColumns() {
        return [
            {
                text: 'Company Name', datafield: 'companyName', cellsalign: 'center', width: 'auto', align: 'center', width: '60%',
                cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    return `<a href="#" title="${rowdata.companyName + ' artifacts'}"><div style="text-align:center;" class="align-self-center align-middle"><button type="button" style="padding-top:0.1rem;" class="btn btn-link align-self-center" onClick={onCompanySearchCellClick('${rowdata.companyFein}')}>${rowdata.companyName}</button></div></a>`;
                }
            },
            { text: 'Company ID', datafield: 'companyId', cellsalign: 'center', width: 'auto', align: 'center', width: '15%' },

            { text: 'EIN', datafield: 'companyFein', cellsalign: 'center', width: 'auto', align: 'center', width: '10%' },
            {
                text: 'City, State', filterable: false, datafield: ['companyCity '], cellsalign: 'center', width: 'auto', align: 'center', width: '15%',
                cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    return `<div style="text-align:center; margin-top: 8px;">${rowdata.companyCity} ,${rowdata.companyState}</div>`;
                }
            }
        ];
    },



    getDataFields() {

        return [

            { name: 'companyName', type: 'string' },
            { name: 'companyId', type: 'string' },
            { name: 'companyFein', type: 'string' },
            { name: 'companyCity', type: 'string' },
            { name: 'companyState', type: 'string' }
        ];
    },

    getSearchInput(spatIn) {
        let dataset = appDataset();

        let spat = spatIn.trim() ? spatIn : '';
        let searchInput = {
            "dataset": dataset,
            "sp": spat
        };
        return searchInput;
    },

    getRecCountSvcURL(input) {
        let parameters = `${'?pattern='}${input.sp}${'&dataset='}${input.dataset}`;
        return `${svcs.GET_COMPANY_BY_PATTERN_COUNT}${parameters}`;
    },

    getRecordsSvcURL(input) {
        let parameters = `${'?dataset='}${input.dataset}${'&pattern='}${input.sp}`;
        return `${svcs.GET_COMPANY_BY_PATTERN}${parameters}`;
    },
    isTreeGrid() {
        return false;
    },
    isSearchable() {
        return true;
    }
};
export const renderCompanySearchFromTransMitter = {
    getTitle() {
        return "Company Search";
    },

    getSearchInstr() {
        return `Search for Companies by Company fein or Company Name
        At least one search criteria is required.`;
    },

    getTooManyResultsTxt() {
        return `There are too many results to be displayed.
            Enter additional criteria to refine the search.`;
    },

    getNoResultsFoundTxt() {
        return `No items found. Try searching with different criteria.`;
    },

    getColumns() {
        return [
            {
                text: 'Company Name', datafield: 'companyName', cellsalign: 'center', width: 'auto', align: 'center', width: '60%',
                cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    return `<a href="#" title="${rowdata.companyName + ' artifacts'}"><div style="text-align:center;" class="align-self-center align-middle"><button type="button" style="padding-top:0.1rem;" class="btn btn-link align-self-center" onClick={onCompanySearchInTransmitter('${rowdata.companyFein}')}>${rowdata.companyName}</button></div></a>`;
                }
            },
            { text: 'Company ID', datafield: 'companyId', cellsalign: 'center', width: 'auto', align: 'center', width: '15%' },

            { text: 'EIN', datafield: 'companyFein', cellsalign: 'center', width: 'auto', align: 'center', width: '10%' },
            {
                text: 'City, State', filterable: false, datafield: ['companyCity '], cellsalign: 'center', width: 'auto', align: 'center', width: '15%',
                cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    return `<div style="text-align:center; margin-top: 8px;">${rowdata.companyCity} ,${rowdata.companyState}</div>`;
                }
            }
        ];
    },



    getDataFields() {

        return [

            { name: 'companyName', type: 'string' },
            { name: 'companyId', type: 'string' },
            { name: 'companyFein', type: 'string' },
            { name: 'companyCity', type: 'string' },
            { name: 'companyState', type: 'string' }
        ];
    },

    getSearchInput(spatIn) {
        let dataset = appDataset();

        let spat = spatIn.trim() ? spatIn : '';
        let searchInput = {
            "dataset": dataset,
            "sp": spat
        };
        return searchInput;
    },

    getRecCountSvcURL(input) {
        let parameters = `${'?pattern='}${input.sp}${'&dataset='}${input.dataset}`;
        return `${svcs.GET_COMPANY_BY_PATTERN_COUNT}${parameters}`;
    },

    getRecordsSvcURL(input) {
        let parameters = `${'?dataset='}${input.dataset}${'&pattern='}${input.sp}`;
        return `${svcs.GET_COMPANY_BY_PATTERN}${parameters}`;
    },
    isTreeGrid() {
        return false;
    },
    isSearchable() {
        return true;
    }
};
export const renderAuthorities = {

    getTitle() {
        return "Existing Authorities";
    },

    getColumns() {
        return [
            { text: 'Authority Code', datafield: 'bsiauth', cellsalign: 'center', width: 'auto', align: 'center', width: '20%' },
            {
                text: 'Authority Name', datafield: 'displayName', cellsalign: 'center', width: 'auto', align: 'center', width: '80%',

                cellsrenderer: function (row, column, value, rowdata) {
                    var uri = rowdata.displayName;
                    let encoded = encodeURI(uri);
                    return `<a href="#" title="${rowdata.displayName + ' artifacts'}"><div style="text-align:center;" class="align-self-center align-middle"><button type="button" style="padding-top:0.1rem;" class="btn btn-link align-self-center" onClick={onAuthSearchCellClick('${rowdata.bsiauth}','${encoded}','','')}>${rowdata.displayName}</button></div></a>`;
                }
            }
        ];
    },


    getDataFields() {
        return [
            { name: 'bsiauth', type: 'string' },
            { name: 'displayName', type: 'string' },
            { name: 'hasLocals', type: 'string' },
            { name: 'locals', type: 'array' }
        ];
    },

    getRecordsSvcURL(input) {
        let parameters = `${'?dataset='}${input.dataset}${'&fein='}${input.fein}${'&pat='}${input.sp}${'&acctType='}`;
        return `${svcs.GET_BANK_TAX_ACCT_AUTHORITYLST}${parameters}`;
    },
    isTreeGrid() {
        return true;
    },
    getSubRecordsSvcURL(input) {
        let parameters = `${'?bsiauth='}${input}`;
        return `${svcs.GET_BANK_TAX_ACCT_LOCALS}${parameters}`;
    }
};

export const renderBankAccountSearch = {
    getTitle() {
        return "Bank Account Search";
    },



    getColumns() {
        return [
            {
                text: 'BSIAUTH', datafield: 'authorityId', cellsalign: 'center', width: 'auto', align: 'center', width: '15%',
                cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    let acctInfoAsJSON = encodeURIComponent(JSON.stringify({
                        "authorityId": rowdata.authorityId,
                        "authorityName": rowdata.authorityName,
                        "taxType": rowdata.taxType,
                        "accountNumber": rowdata.accountNumber
                    }));
                    return `<a href="#" title="${rowdata.authorityId + ' artifacts'}"><div style="text-align:center;" class="align-self-center align-middle"><button type="button" style="padding-top:0.1rem;" class="btn btn-link align-self-center" onClick={onCompBankAcctSelect('${acctInfoAsJSON}')}>${rowdata.authorityId}</button></div></a>`;
                }
            },
            { text: 'Authority Name', datafield: 'authorityName', cellsalign: 'center', width: 'auto', align: 'center', width: '35%' },

            { text: 'Tax Type', datafield: 'taxType', cellsalign: 'center', width: 'auto', align: 'center', width: '30%' },
            { text: 'Account Number', datafield: 'accountNumber', cellsalign: 'center', width: 'auto', align: 'center', width: '20%' }

        ];
    },



    getDataFields() {

        return [

            { name: 'authorityId', type: 'string' },
            { name: 'authorityName', type: 'string' },
            { name: 'taxType', type: 'string' },
            { name: 'accountNumber', type: 'string' },

        ];
    },

    getRecordsSvcURL(input) {
        let parameters = `${'?dataset='}${input.dataset}${'&fein='}${input.fein}${'&routingNumber='}${input.routingNumber}`;
        return `${svcs.GET_COMP_BANK_ACCOUNTS}${parameters}`;
    },
    isTreeGrid() {
        return false;
    },

    isSearchable() {
        return false;
    }
};

export const renderBankData = {

    getTitle() {
        return "Banks";
    },

    getColumns() {
        return [
            {
                text: 'Bank Name', datafield: 'bankName', cellsalign: 'center', width: 'auto', align: 'center', width: '20%',
                cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    console.debug('in renderBankData.getColumns: rowdata=>', rowdata);
                    let routingNumber = rowdata.routingNumber;
                    return `<a href="#" title="${rowdata.bankName + ' artifacts'}"><div style="text-align:center;" class="align-self-center align-middle"><button type="button" style="padding-top:0.1rem;" class="btn btn-link align-self-center" onClick={onBankSearchCellClick('${routingNumber}')}>${rowdata.bankName}</button></div></a>`;
                }
            },

            { text: 'Routing number', datafield: 'routingNumber', cellsalign: 'center', width: 'auto', align: 'center', width: '50%' },

            {
                text: 'Address', datafield: 'city', cellsalign: 'center', width: 'auto', align: 'center', width: '30%',

                cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    return `<div style="text-align:center; margin-top: 8px;">${rowdata.city} ,${rowdata.state}</div>`;
                }
            }
        ];
    },


    getDataFields() {
        return [
            { name: 'bankName', type: 'string' },
            { name: 'routingNumber', type: 'string' },
            { name: 'city', type: 'string' },
            { name: 'state', type: 'strin' }
        ];
    },

    getRecordsSvcURL(input) {
        let parameters = `${'?dataset='}${input.dataset}`;
        return `${svcs.GET_BANK_LIST}${parameters}`;

    },
    isTreeGrid() {
        return false;
    },

    isSearchable() {
        return false;
    },
    getSearchInstr() {
        return ``;
    },

};

export const renderTransmitterBanks = {

    getTitle() {
        return "Transmitter Banks";
    },

    getColumns() {
        return [
            {
                text: 'Bank Name', datafield: 'bankName', cellsalign: 'center', width: 'auto', align: 'center', width: '20%',
                cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    var uri = rowdata.bankName;
                    let encoded = encodeURI(uri);
                    return `<a href="#" title="${rowdata.bankName + ' artifacts'}"><div style="text-align:center;" class="align-self-center align-middle"><button type="button" style="padding-top:0.1rem;" class="btn btn-link align-self-center" onClick={onBankSearchCellClick('${encoded}')}>${rowdata.bankName}</button></div></a>`;
                }
            },

            { text: 'Routing number', datafield: 'routingNumber', cellsalign: 'center', width: 'auto', align: 'center', width: '50%' },

            {
                text: 'Address', datafield: 'city', cellsalign: 'center', width: 'auto', align: 'center', width: '30%',

                cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    return `<div style="text-align:center; margin-top: 8px;">${rowdata.city} ,${rowdata.state}</div>`;
                }
            }
        ];
    },


    getDataFields() {
        return [
            { name: 'bankName', type: 'string' },
            { name: 'routingNumber', type: 'string' },
            { name: 'city', type: 'string' },
            { name: 'state', type: 'strin' }
        ];
    },

    getRecordsSvcURL(input) {
        let parameters = `${'?dataset='}${input.dataset}${'&fein='}${input.fein}`;
        return `${svcs.GET_TRANSMITTER_BANKS}${parameters}`;

    },
    isTreeGrid() {
        return false;
    },

    isSearchable() {
        return false;
    },
    getSearchInstr() {
        return ``;
    },

};
