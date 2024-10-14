import logo from "../../assets/plan-do-logo-pink.png";
import { ButtonContained } from "../ui/button"

export const Question1 = ({ scrollToNext }) => {

    const handleClickYes = () => {
        scrollToNext();
    };

    return (
        <>
        <div className="question-container intro-style">
        <div>
            <img src={logo} alt="plan-do-logo" className="logo" />
        </div>
        <div>
            <h1>Ready to plan?</h1>
        </div>
        <div>
            <ButtonContained text="Yes" onClick={handleClickYes} sx={{backgroundColor: '#fe5474'}}/>
            <ButtonContained text="Yes" onClick={handleClickYes}/>
            <ButtonContained text="Yes" onClick={handleClickYes}/>
        </div>
        </div>
        </>
    );

};