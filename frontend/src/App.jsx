// REACT APPLICATION

// Import components
import { useRef } from "react";
import { Question1 } from "./components/question1";
import { HorizontalScroll } from "./components/horizontalScroll";
import { Inspiration } from "./components/inspiration";

const App = () => {

  const horizontalScrollRef = useRef(null);
  const inspirationRef = useRef(null);

  const scrollFromQuestion1ToHorizontalScroll = () => {
    horizontalScrollRef.current.scrollIntoView({behavior: "smooth"});
  };

  const scrollFromHorizontalScrollToInspiration = () => {
    inspirationRef.current.scrollIntoView({behaviour: "smooth"});
  };

  return (
    <>
      <div>
        <Question1 scrollToNext={scrollFromQuestion1ToHorizontalScroll}/>
      </div>
      <div ref={horizontalScrollRef}>
        <HorizontalScroll scrollToInspiration={scrollFromHorizontalScrollToInspiration} />
      </div>
      <div ref={inspirationRef}>
        <Inspiration />
      </div>
    </>
  );
};

export default App;
