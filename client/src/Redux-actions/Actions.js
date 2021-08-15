import axios from 'axios';
import {COUNTRIES_URL,ACTIVITY_URL} from '../constants/constants';
import {ALL_COUNTRIES,COUNTRIES_DETAILS,NAME_COUTRIES,FILTER_REGION,FILTER_ACTIVITY,FILTER_POPULATION,ORDER_NAME,POST_ACTIVITY,GET_ACTIVITY} from './constants';

export function getCountry() {
    return function(dispatch) {    // el dispach viene desde/gracias al Redux Thunk
        return axios.get(COUNTRIES_URL) // aca usamos axios ya que lo aprendimos a usar en el front para conectarnos con la db
        .then(response => response.data)
        .then(data => {            // aca generamos la promesa y lo metemos en el dispatch
            dispatch({
                type: ALL_COUNTRIES,
                payload: data
            });
        });
    }
}

// export function getCountry() {
//     return function(dispatch) {    // el dispach viene desde/gracias al Redux Thunk
//         return fetch(COUNTRIES_URL)
//         .then(response => response.json())
//         .then(json=>{
//             dispatch({
//                 type: ALL_COUNTRIES,
//                 payload:json
//             })
//         })
//     }
// }

export function getCountriesDetails(id) {
    return function(dispatch) {
        return axios.get(`${COUNTRIES_URL}/${id}`)
        .then(response => {
            dispatch({
                type: COUNTRIES_DETAILS,
                payload: response.data
            });
        });
    }
}

export function getCountriesByName(name) {
    return function(dispatch) {
        return axios.get(`${COUNTRIES_URL}?name=${name}`)
        .then(response => {
            dispatch({
                type: NAME_COUTRIES,
                payload: response.data
            });
        });
    }
}

export function orderCountriesByContinent(continente) {
    return function(dispatch) {
            dispatch({
                type: FILTER_REGION,
                payload: continente
            });
    }
}

export function orderCountriesByPopulation(pupulation) {
    return function(dispatch) {
            dispatch({
                type: FILTER_POPULATION,
                payload: pupulation
            });
    }
}

export function orderCountriesByName(name) {
    return function(dispatch) {
            dispatch({
                type: ORDER_NAME,
                payload: name
            });
    }
}

export function orderCountriesByActivity(activity) {
    return function(dispatch) {
            dispatch({
                type: FILTER_ACTIVITY,
                payload: activity
            });
    }
}


export function postActivity(activity) {
    return function(dispatch) {
        return axios.post(ACTIVITY_URL, activity)
        .then(response => {
            return dispatch({
                type:POST_ACTIVITY,
                payload: response.data
            })
        })
    }
}


export function getActivity() {
    return function(dispatch) {
        return axios.get(ACTIVITY_URL)
        .then(response => {
            return dispatch({
                type: GET_ACTIVITY,
                payload: response.data
            })
        })
    }
}
