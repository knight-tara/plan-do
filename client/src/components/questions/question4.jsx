import icon from "../../assets/plan-do-icon-white.png";
import { CustomDatePicker } from "../ui/datePicker";
import { CustomButton } from "../ui/button";

export const Question4 = ({ scrollToNext, scrollToPrevious }) => {

    const handleDateRangeSelection = ({startDate, endDate}) => {
        sessionStorage.setItem("startDate", startDate);
        sessionStorage.setItem("endDate", endDate);
    };

    const handleNextButtonClick = () => {
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
        <div className="option-button-container date-picker">
            <CustomDatePicker 
                onDateSelection={handleDateRangeSelection}
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