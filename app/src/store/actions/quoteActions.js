import axios from 'axios';

export const FETCH_RQUOTE_START = "FETCH_RQUOTE_START";
export const FETCH_RQUOTE_SUCCESS = "FETCH_RQUOTE_SUCCESS";
export const FETCH_RQUOTE_FAILURE = "FETCH_RQUOTE_FAILURE";

export const fetchRandomQuote = () => {
    return (dispatch) => {

        dispatch({ type: FETCH_RQUOTE_START});

        axios.get('https://api.quotable.io/random')
            .then((res) => {
                dispatch({type: FETCH_RQUOTE_SUCCESS, payload: res.data});
            })
            .catch((err) => {
                dispatch({type: FETCH_RQUOTE_FAILURE, payload: err.message});
            })

    };
};