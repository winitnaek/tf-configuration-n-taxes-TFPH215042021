import * as svcs from '../../base/constants/ServiceUrls';
import AppError from '../../base/utils/AppError';
import { ADMIN_ERROR_MSG } from '../../base/utils/AppErrorEvent';
import URLUtils from '../../base/utils/urlUtils';

/**
 * Put your API calls here!!
 */
class api {
    /**
     * Gets matching records count!
     * 
     * @param {*} input 
     */
    static getRecordCount(input, getSvcURLCallback) {
        console.debug("in getRecordCount API: input => ", JSON.stringify(input));
        let svcs_url = getSvcURLCallback(input);
        return fetch(URLUtils.buildURL(svcs_url), {
            credentials: 'same-origin'
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    var errorCode = response.status;
                    var errorMsg = 'Unable to record count. ' + ADMIN_ERROR_MSG;
                    return new AppError(errorMsg, errorCode);
                }
            })
            .catch(error => {
                return error;
            });
    }

    /**
     * Gets matching records!
     * 
     * @param {*} input 
     */
    static getRecords(input, getSvcURLCallback) {
        console.debug("in getRecords API: input => ", JSON.stringify(input));
        let svcs_url = getSvcURLCallback(input);
        return fetch(URLUtils.buildURL(svcs_url), {
            credentials: 'same-origin',
            'Content-Type': 'application/json',
            Accept: 'application/json'
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    var errorCode = response.status;
                    var errorMsg = 'Unable to get records. ' + ADMIN_ERROR_MSG;
                    return new AppError(errorMsg, errorCode);
                }
            })
            .catch(error => {
                return error;
            });
    }

    static getRecordsCount(input, getSvcURLCallback) {
        console.debug("in getRecords API: input => ", JSON.stringify(input));
        let svcs_url = getSvcURLCallback(input);
        return fetch(URLUtils.buildURL(svcs_url), {
            credentials: 'same-origin',
            'Content-Type': 'application/json',
            Accept: 'application/json'
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    var errorCode = response.status;
                    var errorMsg = 'Unable to get records. ' + ADMIN_ERROR_MSG;
                    return new AppError(errorMsg, errorCode);
                }
            }).then(json => {
                console.log('inside then json');
                console.log(json.length);
                return json.length;
            })
            .catch(error => {
                return error;
            });
    }

    static async getSubRecords(input, getSvcURLCallback) {
        console.debug("in getSubRecords API: input => ", JSON.stringify(input));

        try {
            let svcs_url = getSvcURLCallback(input);
            const response = await fetch(URLUtils.buildURL(svcs_url), {
                credentials: 'same-origin'
            });
            if (response.ok) {
                return response.json();
            }
            else {
                var errorCode = response.status;
                var errorMsg = 'Unable to get records. ' + ADMIN_ERROR_MSG;
                return new AppError(errorMsg, errorCode);
            }
        } catch (error) {
            console.log(error);
        }

    }

    static getTaxTypeListByAuthority(authority) {
        let paramurl = `${'?bsiauth='}${authority}`;
        var svcs_url = `${svcs.GET_TAXTYPELIST_BY_AUTHORITY}${paramurl}`;

        return fetch(URLUtils.buildURL(svcs_url), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    var errorCode = response.status;
                    var errorMsg = 'Unable to Get taxtypelist for authority. ' + ADMIN_ERROR_MSG;
                    return new AppError(errorMsg, errorCode);
                }
            })
            .then(respAsText => respAsText.length ? JSON.parse(respAsText) : [])
            .catch(error => {
                return error;
            });
    }
}
export default api;