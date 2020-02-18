import { getPayeeDetails } from '../../../app/home/actions/payeeActions';
import initialState from '../initialState';


const payeeDetails = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PAYEE_DETAILS':
     
            // To do..  Need to fetch real data from api then return it
            return [
                ...state,
                {
                    dueDate: '01/30/2020',
                    company: 'Acuity Brands Lighting Inc',
                    method: 'Check',
                    payee: 'PA Berkheimer EIT',
                    amount: 397.29,
                    details: [
                        { authority: 'BUCKINGHAM', taxType: 'WITHHOLDING TAX', amount: 0.00 },
                        { authority: 'CRANBERRY', taxType: 'WITHHOLDING TAX', amount: 130.07 },
                        { authority: 'HARBORCREEK', taxType: 'WITHHOLDING TAX', amount: 97.98 },
                        { authority: 'JACKSON', taxType: 'WITHHOLDING TAX', amount: 53.20 },
                        { authority: 'LIMERICK', taxType: 'WITHHOLDING TAX', amount: 116.04 },
                        { authority: 'VENANGO', taxType: 'WITHHOLDING TAX', amount: 0.00 },
                    ]
                }
            ]
        case 'ADD':
            return [
                ...state
            ]
        default:
            return state
    }
}

export default payeeDetails;