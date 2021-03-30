import moment from "moment";
import store from "../../tf-configuration-n-taxes";
import {setParentData} from '../../app/actions/parentDataActions';
import {setFilterFormData} from '../../app/actions/filterFormActions';

/**
 * getPlansInput
 * @param {*} input 
 * @param {*} formValues 
 */
export function getPlansInput(input,formValues){
    let additionalFields = {
        startdate : formValues.startDate ? moment(formValues.startDate).format("MM/DD/YYYY") : moment().format("MM/DD/YYYY"),
    }
    return Object.assign(input, additionalFields);
}