// TO DO:
// add functionality to previous and next buttons
// 

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Question4 = () => {

    const [ startDate, setStartDate ] = useState();
    const [ endDate, setEndDate ] = useState();

    const handleDateSelection = (range) => {
        const [ startDate, endDate ] = range;
        setStartDate(startDate);
        setEndDate(endDate);
    };

    const handleNextButtonClick = () => {
        const date1 = new Date(startDate);
        const date2 = new Date(endDate);
        const timeDifference = date2.getTime() - date1.getTime();
        const dayDifference = Math.round(timeDifference / (1000 *3600 * 24));
        sessionStorage.setItem("noOfDays", dayDifference)
    };

    return (
        <>
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
            <button>Previous</button>
            <button onClick={handleNextButtonClick}>Next</button>
        </div>
        </>
    );

};