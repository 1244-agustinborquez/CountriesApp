import {ALL_COUNTRIES,COUNTRIES_DETAILS,NAME_COUTRIES,FILTER_REGION,FILTER_ACTIVITY,FILTER_POPULATION,ORDER_NAME,POST_ACTIVITY,GET_ACTIVITY} from '../Redux-actions/constants';

const initialState = {
    countriesLoaded: [],
    countriesLoaded2: [],
    countryDetails: {}
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case ALL_COUNTRIES:
        return{
            ...state,
            countriesLoaded: action.payload,
            countriesLoaded2: action.payload
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
        case ORDER_NAME:
            var compareNames = function() {}
            if (action.payload === "ASC") {
                compareNames = function(a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    } else {
                    }
                    return 0;
                }
            } else if (action.payload === "DESC") {
                compareNames = function(a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    } else {
                    }
                    return 0;
                }
            }
            const countriesByName = state.countriesLoaded.sort(compareNames);
            return{
                ...state,
                countriesLoaded: countriesByName
            }
            case FILTER_POPULATION:
                var comparePopulation = function() {}
            if (action.payload === "ASC") {
                comparePopulation = function(a, b) {
                    if (a.poblacion > b.poblacion) {
                        return 1;
                    }
                    if (a.poblacion < b.poblacion) {
                        return -1;
                    } else {
                    }
                    return 0;
                }
            } else if (action.payload === "DESC") {
                comparePopulation = function(a, b) {
                    if (a.poblacion > b.poblacion) {
                        return -1;
                    }
                    if (a.poblacion < b.poblacion) {
                        return 1;
                    } else {
                    }
                    return 0;
                }
            }
            var countriesByPopulation = state.countriesLoaded.sort(comparePopulation)
                return{
                    ...state,
                    countriesLoaded: countriesByPopulation
                }
            case FILTER_REGION:
                const countries = state.countriesLoaded2;
                let countriesByRegion = [];
                if (action.payload === "all") {
                    countriesByRegion = countries;
                } else {
                    countriesByRegion = countries.filter(country => country.continente === action.payload);
                }
                return {
                    ...state,
                    countriesLoaded: countriesByRegion
                }
            case FILTER_ACTIVITY:
            const countrys = state.countriesLoaded2;
            let countriesByActivity = [];
            if (action.payload === "all") {
                countriesByActivity = countrys;
            } else {
                countriesByActivity = state.activitiesList.filter(activity => activity.name === action.payload)[0].countriesLoaded.map(countryWithActivity => countryWithActivity)
            }
            return {
                ...state,
                countriesLoaded: countriesByActivity
            }    
        default:
            return{
                ...state
            }
        }
}


export default rootReducer;