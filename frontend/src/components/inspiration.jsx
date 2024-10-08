import { getInspiration } from "../services/inspiration";
import { useState } from "react";
import { QuestionContainer } from "./questionContainer";

import { Loading } from "./loading"; //ADD LOADING SCREEN
import { InspirationCard } from "./inspirationCard"

export const Inspiration = ({ scrollToNext }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const sendRequestToBackend = async () => {
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
        const data = await getInspiration(userInput);
        setResponse(data);
        setError(null);
    } catch (err) {
        setError(err.message);
        setResponse(null);
    }
    };

    const renderResponse = () => {
        if (response) {
        return <div>Response: {JSON.stringify(response)}</div>;
        }
        return null;
    };

    const renderError = () => {
        if (error) {
        return <div> Error: {error}</div>;
        }
        return null;
    };

    return (
        <QuestionContainer>
        <div>
            <h2>Plan-Do</h2>
            <h1>Here are your results ...</h1>
            <button onClick={sendRequestToBackend}>Show me</button>
            {renderResponse()}
            {renderError()}
        </div>
        </QuestionContainer>
    );
};
