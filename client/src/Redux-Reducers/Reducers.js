import {ALL_COUTRIES,COUNTRIES_DETAILS,NAME_COUTRIES,FILTER_REGION,FILTER_ACTIVITY,FILTER_POPULATION,ORDER_NAME,POST_ACTIVITY,GET_ACTIVITY} from '../Redux-actions/constants';

const initialState = {
    countriesLoaded: [],
    countryDetails: {}
}

function rootReducer(state = initialState, action){
    switch (action.payload) {
        case ALL_COUTRIES:
        return{
            ...state,
            countriesLoaded: action.payload
        }
        case COUNTRIES_DETAILS:
            return{
                ...state,
                countryDetails: action.payload
            }
        case NAME_COUTRIES:
            return{
                ...state,
                countriesLoaded: action.payload
            }
        default:
            return{
                ...state
            }
        }
}


export default rootReducer;