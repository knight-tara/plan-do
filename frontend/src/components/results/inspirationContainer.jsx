// TO DO:
// - add loading animation
import logo from "../../assets/plan-do-logo-white.png";
import { InspirationSlider } from "./inspirationSlider";
// import { Loading } from "./loading"; //ADD LOADING SCREEN

export const InspirationContainer = ({ loading, inspirationResults }) => {
  return (
    <div className="results-container">
      <img src={logo} alt="plan-do-logo" className="logo" />
      {loading ? <h1>Loading ... </h1> : <h1>Here are your results ...</h1>}
      <InspirationSlider
        loading={loading}
        inspirationResults={inspirationResults}
      />
    </div>
  );
};
