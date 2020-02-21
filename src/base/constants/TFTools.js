import {customPayments,customTaxCodes,allBSIPlans,populateV3States} from '../../app/metadata/metaData';
export const UI_PAGE='page';
export const UI_COMP='comp';
export const tftools = [
{ "value": 'CP', "label": 'Custom Payments', "desc":'Custom Payments', "id":'customPayments', type:UI_COMP, link:true},
{ "value": 'CT', "label": 'Custom Tax Codes', "desc":'Custom Tax Codes', "id":'customTaxCodes', type:UI_COMP,link:true},
{ "value": 'UQ', "label": 'User Queries', "desc":'User Data Queries', "id":'userDataQueries', type:UI_PAGE,link:true},
{ "value": 'UQ', "label": 'All BSI Plans', "desc":'All BSI Plans', "id":'allBSIPlans', type:UI_COMP,link:false},
{ "value": 'UQ', "label": 'Populate V3 States', "desc":'Populate V3 States', "id":'populateV3States', type:UI_COMP,link:false},

];

export const metadatamap = [
    {"id":'customPayments', metadata:customPayments},
    {"id":'customTaxCodes', metadata:customTaxCodes},
    {"id":'allBSIPlans', metadata:allBSIPlans},
    {"id":'populateV3States', metadata:populateV3States}];