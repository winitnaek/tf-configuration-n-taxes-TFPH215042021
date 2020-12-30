import  {SET_PARENT_DATA} from '../../base/constants/ActionTypes';

export const setParentData = (data) => {
    console.log('Made it to the parentForm action', data)
    return  {
        type: SET_PARENT_DATA,
        data: data
    }   
}  