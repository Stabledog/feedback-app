import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
    console.log(feedback);
    return (
        <>
            {feedback.map((item) => {
                console.log(`item.${item.id}`);
                return (<FeedbackItem />);
            })}
        </>
    );
}

export default FeedbackList;
