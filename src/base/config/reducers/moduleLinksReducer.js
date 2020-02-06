import * as types from '../actions/moduleLinksActions';
import initialState from '../initialState';


const moduleLinks = (state = initialState.sidebar.options, action ) => {
    console.log('Made it to the reducer')
    console.log(action.type)
    switch(action.type) {
        case types.GET_MODULE_LINKS:
            console.log('This action type was found')
            // To do..  Need to fetch real data from api then return it
            return [
                ...state,
                {
                   // Need to implement react-thunk action call to get data from api
                }
            ]
        case types.SET_MODULE_LINKS:
            console.log(action.payload)
            return ( action.payload)
            
        default:
            console.log(`This action was not found`)
            console.log(state)
            return state
    }
}

export default moduleLinks;