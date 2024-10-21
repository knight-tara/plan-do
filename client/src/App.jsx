// REACT APPLICATION

import { useRef, useState } from "react";
import { Question1 } from "./components/intro/question1";
import { HorizontalScroll } from "./components/questions/horizontalScroll";
import { InspirationContainer } from "./components/results/inspirationContainer";
import { getInspiration } from "./services/inspiration";

const App = () => {
  const [inspirationResults, setInspirationResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendRequestToBackend = async () => {
    setLoading(true);

    const eventType = sessionStorage.getItem("eventType");
    const noOfGuests = sessionStorage.getItem("noOfGuests");
    const startDate = sessionStorage.getItem("startDate");
    const endDate = sessionStorage.getItem("endDate");
    const location = sessionStorage.getItem("location");
    const budget = sessionStorage.getItem("budget");

    const userInput = {
      eventType,
      noOfGuests,
      startDate,
      endDate,
      location,
      budget,
    };

    try {
      const response = await getInspiration(userInput);
      console.log("app.js:", response);
      setInspirationResults(response);
      console.log("inspirationResults:", response);
    } catch (error) {
      console.error("Error fetching inspiration data:", error);
    } finally {
      setLoading(false);
    }
  };

  const horizontalScrollRef = useRef(null);
  const inspirationRef = useRef(null);

  const scrollFromQuestion1ToHorizontalScroll = () => {
    horizontalScrollRef.current.scrollIntoView();
  };

  const scrollFromHorizontalScrollToInspiration = () => {
    inspirationRef.current.scrollIntoView({ block: "start" });
  };

  return (
    <>
      <div>
        <Question1 scrollToNext={scrollFromQuestion1ToHorizontalScroll} />
      </div>
      <div ref={horizontalScrollRef}>
        <HorizontalScroll
          sendRequestToBackend={sendRequestToBackend}
          scrollToInspiration={scrollFromHorizontalScrollToInspiration}
        />
      </div>
      <div ref={inspirationRef}>
        <InspirationContainer
          loading={loading}
          inspirationResults={inspirationResults}
        />
      </div>
    </>
  );
};

export default App;
