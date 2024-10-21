import icon from "../../assets/plan-do-icon-white.png";
import { CustomButton } from "../ui/button";
export const Question5 = ({ scrollToNext, scrollToPrevious }) => {

    const handleUkButtonClick = () => {
        sessionStorage.setItem("location", "UK");
    };

    const handleEuropeButtonClick = () => {
        sessionStorage.setItem("location", "europe");
    };

    const handleInspireMeButtonClick = () => {
        sessionStorage.setItem("location", "anywhere, inspire me");
    };

    const handleNextButtonClick = () => {
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
            <h1>Where?</h1>
        </div>
        <div className="option-button-container">
            <CustomButton 
                text="UK"
                variant="contained"
                color="secondary"
                onClick={handleUkButtonClick}
            />
            <CustomButton 
                text="Europe"
                variant="contained"
                color="secondary"
                onClick={handleEuropeButtonClick}
            />
            <CustomButton 
                text="Inspire Me!"
                variant="outlined"
                color="secondary"
                onClick={handleInspireMeButtonClick}
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