import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions'

const initialState = {
    isLoading: false,
    error: '',
    smurfData: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                smurfData: action.payload,
                isLoading: false
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}