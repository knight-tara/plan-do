import { useState } from "react";

export const Question6 = ({ scrollToNext, scrollToPrevious, sendRequestToBackend }) => {

    const [answer, setAnswer] = useState("");

    const handleHelpButtonClick = () => {
        setAnswer("I don't know, help me");
    };

    const handleNextButtonClick = () => {
        sessionStorage.setItem("budget", answer);
        scrollToNext();
        sendRequestToBackend();
    };

    const handlePreviousButtonClick = () => {
        scrollToPrevious();
    };

    return (
        <div className="question-container">
        <div>
            <h2>Plan-Do</h2>
        </div>
        <div>
            <h1>Let's talk money $$</h1>
        </div>
        <div>
            <input
                name="budget"
                placeholder="I have a budget of X per person ..."
                onChange={(e) => setAnswer(e.target.value)}
            />
            <button onClick={handleHelpButtonClick}>Help me figure it out!</button>
        </div>
        <div>
            <button onClick={handlePreviousButtonClick}>Previous</button>
            <button onClick={handleNextButtonClick}>Next</button>
        </div>
        </div>
    );

};