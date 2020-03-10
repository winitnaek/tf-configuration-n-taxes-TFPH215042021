import * as Metadata from '../metadata/metaData';
import GeneralApi from '../api/generalApi';
import {
    USAGE,
    USAGE_SUCCESS,
    USAGE_FAILED
} from '../../base/constants/ActionTypes';

export function getRecentUsage(pgid) {
    return async (dispatch, getState) => {
      try {
        dispatch({type: USAGE});
        const data = await GeneralApi.getApiData('recentUsage');
        const payload = data.properties[pgid];
        if (Metadata[pgid].cruddef.hasRecentUsage)
          dispatch({type: USAGE_SUCCESS, payload: payload})
        else 
          dispatch({type: USAGE_SUCCESS, payload: null});
      } catch (error) {
        dispatch({USAGE_FAILED, error})
      }
    }
  }