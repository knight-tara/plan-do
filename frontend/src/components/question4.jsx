import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { QuestionContainer } from "./questionContainer";


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
        <QuestionContainer>
        <div>
            <h2>Plan-Do</h2>
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
            <button onClick={handlePreviousButtonClick}>Previous</button>
            <button onClick={handleNextButtonClick}>Next</button>
        </div>
        </QuestionContainer>
    );

};