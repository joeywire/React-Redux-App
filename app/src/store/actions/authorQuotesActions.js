import axios from 'axios';
import { FETCH_RQUOTE_FAILURE } from './quoteActions';

export const FETCH_AQUOTE_START = "FETCH_AQUOTE_START";
export const FETCH_AQUOTE_SUCCESS = "FETCH_AQUOTE_SUCCESS";
export const FETCH_AQUOTE_FAILURE = "FETCH_AQUOTE_FAILURE";

export const fetchAuthorQuotes = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_AQUOTE_START});

        axios.get(`https://api.quotable.io/quotes?author=aristotle`)
            .then((res) => {
                dispatch({ type: FETCH_AQUOTE_SUCCESS, payload: res.data.results})
            })
            .catch((err) => {
                dispatch({ type: FETCH_RQUOTE_FAILURE, payload: err.message})
            });
    };
};