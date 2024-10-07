// REACT APPLICATION

// Import app styling
import "./App.css";
// Import components
import { Question1 } from "./components/question1";
import { HorizontalScroll } from "./components/horizontalScroll";
import { Inspiration } from "./components/inspiration";

const App = () => {
  return (
    <>
      <Question1 />
      <HorizontalScroll />
      <Inspiration />
    </>
  );
};

export default App;
