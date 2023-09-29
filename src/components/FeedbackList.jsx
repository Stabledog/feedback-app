import React from "react";
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
