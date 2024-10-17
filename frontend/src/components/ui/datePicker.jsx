import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const CustomDatePicker = ({ onDateSelection }) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const handleDateSelection = (dateRange) => {
        const[startDate, endDate] = dateRange;
        setStartDate(startDate);
        setEndDate(endDate);
        if (onDateSelection) {
            onDateSelection({ startDate: startDate, endDate: endDate });
        }
    }

    return (
        <DatePicker
            selected={startDate}
            onChange={handleDateSelection}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
        />

    );
};