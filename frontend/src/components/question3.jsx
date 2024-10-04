//TO DO:
// add validation for user input
// add functionality to previous & next buttons (/ can we find arrows instead of text?)

import { useState } from "react";

export const Question3 = () => {

    const [answer, setAnswer] = useState("");

    const handleNextButtonClick = () => {
        sessionStorage.setItem("noOfGuests", answer);
    };

    return (
        <>
        <div>
            <h2>Plan-Do</h2>
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
            <button>Previous</button>
            <button onClick={handleNextButtonClick}>Next</button>
        </div>
        </>
    );

};