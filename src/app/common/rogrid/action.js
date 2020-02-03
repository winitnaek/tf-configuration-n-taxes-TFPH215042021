import * as types from '../../base/constants/ActionTypes';
import { LKP_MAX_NO_RECS } from '../../base/constants/AppConstants';
import { generateAppErrorEvent } from '../../base/utils/AppErrorEvent';
import api from './api';

export function checkRecordCount(input, getRecCountSvcURL, getRecordsSvcURL) {
    return function (dispatch, getState) {
        console.debug('in action searchRecords: input => ', input, getRecCountSvcURL);
        if (getRecCountSvcURL) {
            return api.getRecordCount(input, getRecCountSvcURL).then(recCount => {
                if (recCount === 0) {
                    dispatch(onNoRecordsFound(recCount));
                } else if (recCount > LKP_MAX_NO_RECS && ("%" === input.sp || !input.sp || '' === input.sp.trim())) {
                    dispatch(onTooManyRecordsFound(recCount));
                } else if (recCount > 0) {
                    return getRecordsAfterCountCheck(input, getRecordsSvcURL, dispatch);
                } else {
                    throw recCount;
                }
            }).catch(error => {
                generateAppErrorEvent(error.type, error.status, error.message, error);
            });
        } else {
            console.debug('No search count url defined! ', input);
            return api.getRecordsCount(input, getRecordsSvcURL).then(recCount => {
                if (recCount === 0) {
                    dispatch(onNoRecordsFound(recCount));
                } else if (recCount > LKP_MAX_NO_RECS && ("%" === input.sp || !input.sp || '' === input.sp.trim())) {
                    dispatch(onTooManyRecordsFound(recCount));
                } else if (recCount > 0) {
                    return getRecordsAfterCountCheck(input, getRecordsSvcURL, dispatch);
                } else {
                    throw recCount;
                }
            }).catch(error => {
                generateAppErrorEvent(error.type, error.status, error.message, error);
            });
        }
    };
}

function getRecordsAfterCountCheck(input, getSvcURLCallback, dispatch) {
    console.debug('in action getRecordsAfterCountCheck: input => ', input);
    return api.getRecords(input, getSvcURLCallback).then(recs => {
        if (recs && recs.length) {
            dispatch(onGetRecordsSuccess(recs));
        } else {
            throw recs;
        }
    }).catch(error => {
        generateAppErrorEvent(error.type, error.status, error.message, error);
    });
}

export function getRecords(input, getRecordsSvcURL, checkForNoOrTooManyRecs,includeAll) {
    return function (dispatch, getState) {
        console.debug('in action getRecords: input => ', input);
        return api.getRecords(input, getRecordsSvcURL).then(recs => {
            if (checkForNoOrTooManyRecs && recs.length === 0) {
                dispatch(onNoRecordsFound(0));
            } else if (checkForNoOrTooManyRecs && recs.length > LKP_MAX_NO_RECS && ("%" === input.sp || !input.sp || '' === input.sp.trim())) {
                dispatch(onTooManyRecordsFound(recs.length));
            } else if (recs && recs.length) {
                if(includeAll){
                let recAll ={
                    "user": null,
                    "dataset": null,
                    "bsiauth": "XXXXXXXX",
                    "name": "ALL",
                    "countyId": " ",
                    "authType": "A",
                    "authTitle": "ALL",
                    "state": "",
                    "displayName": "ALL",
                    "hasParent": false,
                    "hasLocals": false,
                    "showLocals": false,
                    "hasUnfiledReports": false,
                    "locals": [],
                    "reportList": [],
                    "paymentList": null
                  };
                  recs.push(recAll);
                }
                dispatch(onGetRecordsSuccess(recs));
            } else {
                throw recs;
            }
        }).catch(error => {
            generateAppErrorEvent(error.type, error.status, error.message, error);
        });
    };
}

export function onNoRecordsFound(recCount) {
    console.debug('in action onNoRecordsFound...');
    return { type: types.LOOKUP_NO_RECS_FOUND, recCount };
}

export function onTooManyRecordsFound(recCount) {
    console.debug('in action onTooManyRecordsFound...');
    return { type: types.LOOKUP_TOO_MANY_RECS_FOUND, recCount };
}

export function onGetRecordsSuccess(records) {
    console.debug('in action onGetRecordsSuccess...');
    return { type: types.LOOKUP_RECORDS_SUCCESS, records };
}

export function authLocalRecords(input, getSvcURLCallback) {
    console.debug('in action authLocalRecords: input => ', input);
    return function (dispatch, getState) {
        return api.getSubRecords(input, getSvcURLCallback, dispatch).then(recs => {
            if (recs && recs.length) {
                dispatch(onGetRecordsSuccess(recs));
            } else {
                throw recs;
            }
        }).catch(error => {
            generateAppErrorEvent(error.type, error.status, error.message, error);
        });
    };
}

export function getTaxTypeListByAuthority(authority) {
    return function (dispatch, getState) {
        const state = getState();
        return api.getTaxTypeListByAuthority(authority).then(taxtypelist => {
            if (taxtypelist.status && taxtypelist.message) {
                let arr = [];
                arr.push([]);
                dispatch(getTaxTypeListByAuthorityFailed(arr));
                throw taxtypelist;
            } else {
                if (taxtypelist) {
                    dispatch(getTaxTypeListByAuthoritySuccess(taxtypelist));
                }
            }
        }).catch(error => {
            generateAppErrorEvent(error.type, error.status, error.message, error);
        });
    };
}
export function getTaxTypeListByAuthoritySuccess(taxtypelist) {
    return { type: types.GET_TAXTYPELIST_SUCCESS, taxtypelist };
}
export function getTaxTypeListByAuthorityFailed(taxtypelist) {
    return { type: types.GET_TAXTYPELIST_ERROR, taxtypelist };
}
