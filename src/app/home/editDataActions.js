import  {SET_EDIT_DATA} from '../../base/constants/ActionTypes';

export const setEditData = (data) => {
    return  {
        type: SET_EDIT_DATA,
        data: data
    }   
}
