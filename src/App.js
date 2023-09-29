import {useState} from 'react';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
    const [feedback, ] = useState(FeedbackData);

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} reverse={false}/>
            </div>
        </>
    );
}

export default App;
