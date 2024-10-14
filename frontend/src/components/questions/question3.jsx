
//TO DO:
// add validation for user input
import { useState } from "react";
import icon from "../../assets/plan-do-icon-white.png";

export const Question3 = ({ scrollToNext, scrollToPrevious }) => {

    const [answer, setAnswer] = useState("");

    const handleNextButtonClick = () => {
        sessionStorage.setItem("noOfGuests", answer);
        scrollToNext();
    };

    const handlePreviousButtonClick = () => {
        scrollToPrevious();
    }

    return (
        <div className="question-container horizontal-scroll-style">
        <div>
        <img src={icon} alt="plan-do-icon-white" className="icon-white" />
        </div>
        <div>
            <h1>For how many?</h1>
        </div>
        <div>
            <input
                name="noOfGuests"
                placeholder="X number of guests"
                onChange={(e) => setAnswer(e.target.value)}
            />
        </div>
        <div>
            <button onClick={handlePreviousButtonClick}>Previous</button>
            <button onClick={handleNextButtonClick}>Next</button>
        </div>
        </div>
    );

};