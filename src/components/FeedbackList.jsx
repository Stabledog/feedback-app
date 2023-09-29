import React from "react";
import PropTypes from 'prop-types';
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, reverse }) {
    return (
        <>
            {feedback.map((item) => {
                return (<FeedbackItem key={item.id} item={item} reverse={reverse} />);
            })}
        </>
    );
}

export default FeedbackList;

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })),
    reverse: PropTypes.bool
};
