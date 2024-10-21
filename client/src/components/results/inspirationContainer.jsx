import logo from "../../assets/plan-do-logo-white.png";
import { InspirationSlider } from "./inspirationSlider";
import { Loading } from "../ui/loader"

export const InspirationContainer = ({ loading, inspirationResults }) => {
  return (
    <div className="results-container">
      <img src={logo} alt="plan-do-logo" className="logo" />
      {loading ? <Loading/> : 
      <div>
      <h1>Here are your results ...</h1>
      <InspirationSlider
        loading={loading}
        inspirationResults={inspirationResults}
      />
      </div>}
    </div>
  );
};
