import {
    FETCH_AQUOTE_FAILURE,
    FETCH_AQUOTE_START,
    FETCH_AQUOTE_SUCCESS
} from '../actions/authorQuotesActions'


const initialState = {
    isLoading: false, 
    error: "",
    authorQuotes: {}
}

const authorQuoteReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_AQUOTE_START:
            return {
                ...state, 
                isLoading: true, 
                error: ""
            };
        case FETCH_AQUOTE_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                authorQuotes: action.payload
            }
        case FETCH_AQUOTE_FAILURE:
            return{
                ...state, 
                error: action.payload
            };
        default:
            return state;
    };
};

export default authorQuoteReducer;