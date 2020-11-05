//Libraries
import { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchRandomQuote } from "../store/actions/quoteActions";

const RandomQuote = (props) => {
    useEffect(() => {
        props.fetchRandomQuote();
    }, []);


    return (
        <div className="rando_quote_container">
            <h2>Random Quote:</h2>
            {props.isLoading ? <p>Loading....</p> : null}
            {props.error ? <p>{props.error}</p> : null}
            <div>{props.quote.content}</div>
            <div>{props.quote.author}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.randQuote.isLoading,
        quote: state.randQuote.randomQuote,
        error: state.randQuote.error
    }

}

export default connect(mapStateToProps, {fetchRandomQuote})(RandomQuote);