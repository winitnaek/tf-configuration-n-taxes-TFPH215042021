import * as types from '../../base/constants/ActionTypes';
import initialState from '../../base/config/initialState';

export default function reducer(state = initialState.lookupData, action) {
    console.debug('in reducer searchReducer: action =>', action);
    switch (action.type) {
        case types.LOOKUP_NO_RECS_FOUND: {
            return Object.assign({}, ...state, {
                recCount: 0,
                records: [],
                noRecsFound: true,
                tooManyRecsFound: false
            });
        }
        case types.LOOKUP_TOO_MANY_RECS_FOUND: {
            return Object.assign({}, ...state, {
                recCount: 0,
                records: [],
                noRecsFound: false,
                tooManyRecsFound: true
            });
        }
        case types.LOOKUP_RECORDS_SUCCESS: {
            return Object.assign({}, ...state, {
                recCount: action.records.length,
                records: action.records,
                noRecsFound: false,
                tooManyRecsFound: false
            });
        }
        case types.GET_TAXTYPELIST_SUCCESS:{
            return Object.assign({}, ...state, {
               
                records: action.taxtypelist
                
              
            });
          }
        default:
            return state;
    }
}
