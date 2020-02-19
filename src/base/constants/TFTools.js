import {customPayments,customTaxCodes,allBSIPlans,populateV3States} from '../../app/metadata/metaData';
export const tftools = [
{ "value": 'CP', "label": 'Custom Payments', "desc":'Custom Payments', "id":'customPayments', type:'comp'},
{ "value": 'CT', "label": 'Custom Tax Codes', "desc":'Custom Tax Codes', "id":'customTaxCodes', type:'comp'},
{ "value": 'UQ', "label": 'User Queries', "desc":'User Data Queries', "id":'userDataQueries', type:'page'}];
export const metadatamap = [
    {"id":'customPayments', metadata:customPayments},
    {"id":'customTaxCodes', metadata:customTaxCodes},
    {"id":'allBSIPlans', metadata:allBSIPlans},
    {"id":'populateV3States', metadata:populateV3States}];