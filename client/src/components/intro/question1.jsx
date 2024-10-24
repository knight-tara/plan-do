import logo from "../../assets/plan-do-logo-pink.png";
import { CustomButton } from "../ui/button";

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
        <div className="option-button-container">
          <CustomButton
            text="Yes"
            onClick={handleClickYes}
            variant="contained"
            size="large"
          />
          <CustomButton
            text="Yes"
            onClick={handleClickYes}
            variant="contained"
            size="large"
          />
          <CustomButton
            text="Yes"
            onClick={handleClickYes}
            variant="contained"
            size="large"
          />
        </div>
      </div>
    </>
  );
};
