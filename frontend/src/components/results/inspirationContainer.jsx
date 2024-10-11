// TO DO:
// - add loading animation

import { InspirationSlider } from "./inspirationSlider";
// import { Loading } from "./loading"; //ADD LOADING SCREEN

export const InspirationContainer = ({ loading, inspirationResults }) => {
  return (
    <div className="results-container">
      <h2>Plan-Do</h2>
      {loading ? <h1>Loading ... </h1> : <h1>Here are your results ...</h1>}
      <InspirationSlider
        loading={loading}
        inspirationResults={inspirationResults}
      />
    </div>
  );
};
