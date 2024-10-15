import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import icon from "../../assets/plan-do-icon-white.png";
import { CustomButton } from "../ui/button";

export const Question4 = ({ scrollToNext, scrollToPrevious }) => {

    const [ startDate, setStartDate ] = useState();
    const [ endDate, setEndDate ] = useState();

    const handleDateSelection = (range) => {
        const [ startDate, endDate ] = range;
        setStartDate(startDate);
        setEndDate(endDate);
    };

    const handleNextButtonClick = () => {
        sessionStorage.setItem("startDate", startDate);
        sessionStorage.setItem("endDate", endDate);
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
            <h1>When?</h1>
        </div>
        <div>
            <DatePicker
                selected={startDate}
                onChange={handleDateSelection}
                startDate={startDate}
                endDate={endDate}
                selectsRange
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