import  {SET_EDIT_DATA} from '../../base/constants/AppConstants';

export const setEditData = (data) => {
    return  {
        type: SET_EDIT_DATA,
        data: data
    }   
}
