import { csrfFetch } from "./csrf";

const LOAD_BUSINESSES = 'businesses/loadBusinesses';
const ADD_ONE_BUSINESS = 'businesses/addOneBusiness';
const REMOVE_ONE_BUSINESS = 'businesses/removeOneBusiness';
const UPDATE_BUSINESS = 'businesses/updateBusiness'
const GET_ONE_BUSINESS = 'businesses/getOneBusiness'

const loadBusinesses = (payload) => {
    return {
        type: LOAD_BUSINESSES,
        payload
    }
}

const getOne = (payload) => {
    return {
        type: GET_ONE_BUSINESS,
        payload
    }
}

const addOneBusiness = (payload) => {
    return {
        type: ADD_ONE_BUSINESS,
        payload
    }
}

const updateBusiness = (payload) => {
    return {
        type: UPDATE_BUSINESS,
        payload
    }
}

const removeOneBusiness = (id) => {
    return {
        type: REMOVE_ONE_BUSINESS,
        payload: id
    }
}

export const getAllBusinesses = () => async (dispatch) => {
    const response = await fetch('/api/businesses')
    const data = await response.json()
    const businesses = data.businesses
    dispatch(loadBusinesses(businesses))
}

export const getOneBusiness = (id) => async (dispatch) => {
    const response = await fetch(`/api/businesses/${id}`)
    const business = await response.json()
    dispatch(getOne(business))
}

export const createBusiness = (business) => async (dispatch) => {
    const response = await csrfFetch('/api/businesses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(business)
    })
    if (response.ok) {
        const data = await response.json()
        const business = data.business
        dispatch(addOneBusiness(business))
    }
}

export const editBusiness = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/businesses/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const data = await response.json()
        const updatedBusiness = data.business
        dispatch(updateBusiness(updatedBusiness))
    }
}

export const deleteBusiness = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/businesses/${id}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(removeOneBusiness(id))
    }
}

const initialState = {}

const businessReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_BUSINESSES:
            newState = {}
            action.payload.forEach((business) => (newState[business.id] = business))
            return newState;
        case ADD_ONE_BUSINESS:
            newState = { ...state, [action.payload.id]: action.payload }
            return newState;
        case REMOVE_ONE_BUSINESS:
            newState = {...state}
            delete newState[action.payload]
            return newState;
        case UPDATE_BUSINESS:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case GET_ONE_BUSINESS:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    ...action.payload
                }

            }
        default:
            return state;
    }
}

export default businessReducer;
