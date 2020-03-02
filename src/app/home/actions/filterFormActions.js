import  {SET_FORM_DATA} from '../../../base/constants/ActionTypes';

export const setFilterFormData = (data) => {
    return  {
        type: SET_FORM_DATA,
        data: data
    }   
}