import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = 'reviews/loadReviews';
const ADD_ONE_REVIEW = 'reviews/addOneReview';
const UPDATE_REVIEW = 'reviews/updateReview';
const REMOVE_ONE_REVIEW = 'reviews/removeOneReview'

const loadReviews = (payload) => {
    return {
        type: LOAD_REVIEWS,
        payload
    }
}

const addOneReview = (payload) => {
    return {
        type: ADD_ONE_REVIEW,
        payload
    }
}

const updateReview = (payload) => {
    return {
        type: UPDATE_REVIEW,
        payload
    }
}

const removeOneReview = (id) => {
    return {
        type: REMOVE_ONE_REVIEW,
        payload: id
    }
}

export const getAllReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews')
    const data = await response.json()
    const reviews = data.reviews
    dispatch(loadReviews(reviews))
}

export const createReview = (review) => async (dispatch) => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const data = await response.json()
        const review = data.review
        dispatch(addOneReview(review))
    }
}

export const editReview = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const data = await response.json()
        const updatedReview = data.review
        dispatch(updateReview(updatedReview))
    }
}

export const deleteReview = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(removeOneReview(id))
    }
}

const initialState = {}

const reviewReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_REVIEWS:
            newState = {}
            action.payload.forEach((review) => (newState[review.id] = review))
            return newState;
        case ADD_ONE_REVIEW:
            newState = { ...state, [action.payload.id]: action.payload }
            return newState;
        case UPDATE_REVIEW:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case REMOVE_ONE_REVIEW:
            newState = {...state}
            delete newState[action.payload]
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;
