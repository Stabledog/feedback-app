import { useState } from "react";

function FeedbackItem() {
    const [rating, setRating] = useState(7);
    const [text, setText] = useState("This is an item");

    const handleClick = () => {
        setRating((prev) => {
            console.log(`prev=${prev}`);
            return prev<=9 && prev+1 || 10;
        });
    }

    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default FeedbackItem;
