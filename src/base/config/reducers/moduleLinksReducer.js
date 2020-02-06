import * as types from '../actions/moduleLinksActions';
import initialState from '../initialState';


const moduleLinks = (state = [] , action) => {
    console.log('made it to the module links action handler')
    console.log(action)
    switch(action.type) {
      
        case types.GET_MODULE_LINKS:
            // To do..  Need to fetch real data from api then return it
            return [
                ...state,
                {
                   // Need to implement react-thunk action call to get data from api
                }
            ]
        case 'setModuleLinks':
        
            return ( action.payload)
            
        default:
            return state
    }
}

export default moduleLinks;