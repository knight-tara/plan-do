import { useState } from "react";
import icon from "../../assets/plan-do-icon-white.png";
import { CustomButton } from "../ui/button";
import { CustomTextField } from "../ui/textField";

export const Question6 = ({ scrollToNext, scrollToPrevious, sendRequestToBackend }) => {

    const [answer, setAnswer] = useState("");

    // const handleHelpButtonClick = () => {
    //     setAnswer("I don't know, help me");
    // };

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
        <div>
            <CustomTextField
                label="Budget per person (£)"
                variant="filled"
                color="secondary"
                onChange={(e) => setAnswer(e.target.value)}
            />
            {/* <CustomButton
                text="Inspire Me!"
                onClick={handleHelpButtonClick}
                variant="outlined"
                color="secondary"
            /> */}
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