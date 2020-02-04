import {GET_MODULE_LINKS} from '../../constants/ModuleLinksConstants';
import {SET_MODULE_LINKS} from '../../constants/ModuleLinksConstants';

export const getModuleLinks = () => {
    return  {
        type: "GET_MODULE_LINKS",
    }   
}

export const setModuleLinks = (payload) => {
    console.log(payload)
    return  {
        type: "SET_MODULE_LINKS",
        payload: payload
    }   
}