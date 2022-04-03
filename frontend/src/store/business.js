const LOAD_BUSINESSES = 'businesses/loadBusinesses';
const ADD_ONE_BUSINESS = 'businesses/addOneBusiness';
const REMOVE_ONE_BUSINESS = 'businesses/removeOneBusiness';
// add update later

const loadBusinesses = (payload) => {
    return {
        type: LOAD_BUSINESSES,
        payload
    }
}

const addOneBusiness = (payload) => {
    return {
        type: ADD_ONE_BUSINESS,
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

export const createBusiness = (business) => async (dispatch) => {
    const response = await fetch('/api/businesses', {
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
        default:
            return state;
    }
}

export default businessReducer;
