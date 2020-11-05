import { combineReducers } from 'redux';

import randQuote from './quoteReducer';
import authQuotes from './authorQuoteReducer';

export default combineReducers({
    randQuote,
    authQuotes
});