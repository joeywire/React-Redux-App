import { 
    FETCH_RQUOTE_START,
    FETCH_RQUOTE_SUCCESS,
    FETCH_RQUOTE_FAILURE
 } from '../actions/quoteActions';

const initialState = {
    isLoading: false, 
    randomQuote: {},
    error: ""
}

const quoteReducer= (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RQUOTE_START:
            return {
                ...state, 
                isLoading: true,
                error: ""
            };
        case FETCH_RQUOTE_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                randomQuote: action.payload
            };
        case FETCH_RQUOTE_FAILURE:
            return {
                ...state, 
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default quoteReducer