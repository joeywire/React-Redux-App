import { useEffect, useState } from 'react';
import { connect } from "react-redux";

import { fetchAuthorQuotes } from '../store/actions/authorQuotesActions';


const AuthorQuotes = (props) => {

    const [input, setInput] = useState("");

    const handleChanges = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.fetchAuthorQuotes();
    }

    return (
        <div>
            <h2>props.author Quotes</h2>
            {props.isLoading ? <p>Loading....</p> : null}
            {props.error ? <p>{props.error}</p> : null}
            <div className="inputContainer">
                <input 
                    className="authInput"
                    type="text"
                    name="input"
                    placeholder="Author Name..."
                    value={input}
                    onChange={handleChanges}
                />
                <button onClick={handleSubmit}>
                    Search
                </button>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.authQuotes.loading,
        error: state.authQuotes.error,
        quotes:state.authQuotes.authorQuotes
    }
}

export default connect(mapStateToProps, {fetchAuthorQuotes})(AuthorQuotes)