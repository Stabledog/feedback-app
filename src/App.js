import {useState} from 'react';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import Button from './components/Button'

function App() {
    const [feedback, ] = useState(FeedbackData);

    return (
        <>
            <Header />
            <div className="container">
                <Button text="Hello" onClick={(e)=>console.log(e)}/>
                <FeedbackList feedback={feedback} reverse={false}/>
            </div>
        </>
    );
}

export default App;
