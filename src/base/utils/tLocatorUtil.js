import moment from "moment";
import store from "../../tf-configuration-n-taxes";
import {setParentData} from '../../app/actions/parentDataActions';

/**
 * generateTaxLocatorPDF
 * @param {*} pageId 
 * @param {*} store 
 * @param {*} formdata 
 * @param {*} mode 
 */
export function generateTaxLocatorPDF(pageId, state, formData, mode){
    let input= {
        btxlemp: {
            id: {
              dataset: appDataset(),
              employee: formData.employeeCode,
              checkdate: moment(formData.checkDate).format("MM/DD/YYYY")
            },
            empclass: formData.employeeClass || 1,
            eicstatus: formData.eicCode || 1,
            grosswages: formData.grossAmount || 0,
            railroad: formData.railRoadCode || 0,
            taxfilter: formData.taxFilter || 0,
            whopays: formData.paidBy || 0,
            hiredate: formData.hireDate,
            deathdate: formData.dateOfDeath,
            allstates: formData.returnAllStates || 0,
            retireplan: formData.privateSectorRetirementPlanIndicator || 0,
            dataver: formData.dataVersion || 0,
            empsts: 0,
            selstaind: formData.selectedStateIndicator || 0,
            bylocation: 0,
            resicntry: formData.residentCountry,
            selstat: formData.selectedState,
            cpycode: formData.companyCode.trim(),
            fed: formData.fedWthForEeLive,
            empltype: formData.employmentType || 0,
            wCompFlag: 0
          },
          checkDateYYYYMMDD: "20170119",
          hireDateYYYYMMDD: "",
          dateOfDeathYYYYMMDD: null,
          terminationDateYYYYMMDD: null,
          numberOfTaxEntries: 0,
          numberOfLocationEntries: 0,
        };
        return input;
        }

/**
 * WhatIfLocationsDeleteAll
 * @param {*} pageId 
 * @param {*} store 
 * @param {*} formdata 
 * @param {*} mode 
 */

export function buildWhatIfLocationsDeleteAllInput(pageid, store, formdata, state) {
    const parentInfo = state.parentInfo
        let input = {
            dataset: appDataset(),
            employee: parentInfo.employeeCode
            };
            return input;
          }