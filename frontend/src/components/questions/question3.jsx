//TO DO:
// add validation for user input
import { useState } from "react";
import icon from "../../assets/plan-do-icon-white.png";
import { CustomButton } from "../ui/button";
import { CustomTextField } from "../ui/textField";

export const Question3 = ({ scrollToNext, scrollToPrevious }) => {
    const [answer, setAnswer] = useState("");

    const handleNextButtonClick = () => {
        sessionStorage.setItem("noOfGuests", answer);
        scrollToNext();
    };

    const handlePreviousButtonClick = () => {
        scrollToPrevious();
    };

    return (
        <div className="question-container horizontal-scroll-style">
        <div>
            <img src={icon} alt="plan-do-icon-white" className="icon-white" />
        </div>
        <div>
            <h1>For how many?</h1>
        </div>
        <div>
            <CustomTextField
                label=""
                variant="filled"
                color="secondary"
                onChange={(e) => setAnswer(e.target.value)}
            />
        </div>
        <div>
            <CustomButton
                onClick={handlePreviousButtonClick}
                variant="contained"
                color="secondary"
                iconDirection="left"
            />
            <CustomButton
                onClick={handleNextButtonClick}
                variant="contained"
                color="secondary"
                iconDirection="right"
            />
        </div>
        </div>
    );
    };
