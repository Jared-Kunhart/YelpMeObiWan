import { csrfFetch } from "./csrf";

// GET ALL
const LOAD_BUSINESSES = 'businesses/loadBusinesses';

const loadBusinesses = (payload) => {
    return {
        type: LOAD_BUSINESSES,
        payload
    }
}

export const getAllBusinesses = () => async (dispatch) => {
    const response = await fetch('/api/businesses')
    const data = await response.json()
    const businesses = data.businesses
    dispatch(loadBusinesses(businesses))
}

//GET ONE
const GET_ONE_BUSINESS = 'businesses/getOneBusiness'

const getOne = (payload) => {
    return {
        type: GET_ONE_BUSINESS,
        payload
    }
}

export const getOneBusiness = (id) => async (dispatch) => {
    const response = await fetch(`/api/businesses/${id}`)
    const business = await response.json()
    dispatch(getOne(business))
}

//CREATE
const ADD_ONE_BUSINESS = 'businesses/addOneBusiness';

const addOneBusiness = (payload) => {
    return {
        type: ADD_ONE_BUSINESS,
        payload
    }
}

export const createBusiness = (business) => async (dispatch) => {
    const { title, description, location, image } = business;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    if (image) formData.append("image", image)

    const response = await csrfFetch('/api/businesses', {
        method: 'POST',
        headers: { "Content-Type": "multipart/form-data", },
        body: formData,
    })

    const data = await response.json();

    if (data.errors) {
        return data
    }
    dispatch(addOneBusiness(data.business));
    return response;
}

//UPDATE
const UPDATE_BUSINESS = 'businesses/updateBusiness'

const updateBusiness = (payload) => {
    return {
        type: UPDATE_BUSINESS,
        payload
    }
}

export const editBusiness = ({payload, id}) => async (dispatch) => {
    const response = await csrfFetch(`/api/businesses/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "multipart/form-data", },
        body: payload
    })
    const data = await response.json();
    if (data.errors) {
        return data
    }
    dispatch(updateBusiness(data.business));
    return data.business;
}

// DELETE
const REMOVE_ONE_BUSINESS = 'businesses/removeOneBusiness';

const removeOneBusiness = (id) => {
    return {
        type: REMOVE_ONE_BUSINESS,
        payload: id
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
