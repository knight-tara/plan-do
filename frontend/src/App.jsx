// REACT APPLICATION

// Import app styling
import "./App.css";
// Import components
import { Question1 } from "./components/question1";
import { Question2 } from "./components/question2";
import { Question3 } from "./components/question3";
import { Question4 } from "./components/question4";
import { Question5 } from "./components/question5";
import { Question6 } from "./components/question6";
import { Inspiration } from "./components/inspiration";

const App = () => {
  return (
    <>
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
      <Question5 />
      <Question6 />
      <Inspiration />
    </>
  );
};

export default App;
