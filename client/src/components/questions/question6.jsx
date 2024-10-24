import { useState } from "react";
import icon from "../../assets/plan-do-icon-white.png";
import { CustomButton } from "../ui/button";
import { CustomTextField } from "../ui/textField";

export const Question6 = ({ scrollToNext, scrollToPrevious, sendRequestToBackend }) => {

    const [answer, setAnswer] = useState("");

    const handleNextButtonClick = () => {
        sessionStorage.setItem("budget", answer);
        scrollToNext();
        sendRequestToBackend();
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
            <h1>Let's talk money</h1>
        </div>
        <div className="option-button-container">
            <CustomTextField
                label="(£) budget per person"
                variant="outlined"
                color="secondary"
                onChange={(e) => setAnswer(e.target.value)}
                size="small"
            />
        </div>
        <div className="navigation-button-container">
            <CustomButton
                onClick={handlePreviousButtonClick}
                variant="contained"
                color="secondary"
                iconDirection="left"
                size="small"
            />
            <CustomButton
                onClick={handleNextButtonClick}
                variant="contained"
                color="secondary"
                iconDirection="right"
                size="small"
            />
        </div>
        </div>
    );

};