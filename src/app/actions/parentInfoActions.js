import  {SET_PARENT_INFO,SET_CHILD_INFO} from '../../base/constants/ActionTypes';

export const setParentInfo = (data) => {
    return  {
        type: SET_PARENT_INFO,
        data: data
    }
}
export const setChildInfo = (data) => {
    return  {
        type: SET_CHILD_INFO,
        data: data
    }
}    