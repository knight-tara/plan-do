import icon from "../../assets/plan-do-icon-white.png";
import { CustomButton } from "../ui/button";
import { useRef } from "react";
export const Question2 = ({ scrollToNext }) => {

    const henButtonClickCount = useRef(0);
    const stagButtonClickCount = useRef(0);
    const stenButtonClickCount = useRef(0);

    const handleHenButtonClick = () => {
        sessionStorage.setItem("eventType", "hen");
        henButtonClickCount.current += 1;
    };

    const handleStagButtonClick = () => {
        sessionStorage.setItem("eventType", "stag");
        stagButtonClickCount.current += 1;
    };

    const handleStenButtonClick = () => {
        sessionStorage.setItem("eventType", "sten");
        stenButtonClickCount.current += 1;
    };

    return (
        <div className="question-container horizontal-scroll-style">
        <div>
            <img src={icon} alt="plan-do-icon-white" className="icon-white" />
        </div>
        <div>
            <h1>First things first ...</h1>
        </div>
        <div>
        <CustomButton
            text="Hen"
            onClick={handleHenButtonClick}
            variant="contained"
            color="secondary"
        />
        <CustomButton
            text="Stag"
            onClick={handleStagButtonClick}
            variant="contained"
            color="secondary"
        />
        <CustomButton
            text="Sten"
            onClick={handleStenButtonClick}
            variant="contained"
            color="secondary"
        />
        </div>
        <div>
        <CustomButton
            onClick={scrollToNext}
            variant="contained"
            color="secondary"
            iconDirection="right"
        />
        </div>
    </div>
);
};
