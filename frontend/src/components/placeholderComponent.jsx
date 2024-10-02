import { getInspiration } from '../services/inspiration';
import { useState } from 'react';



export const PlaceholderComponent = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const testAPI = async () => {

        const userInput = {
            eventType: "hen",
            noOfGuests: 15,
            noOfDays: 3,
            location: "UK",
            accommodationType: "air BnB",
            activitiesPlanned: "none",
            budgetPerPerson: "undecided"
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
        <div>
            <p>This is a placeholder test!</p>
            <button onClick={testAPI}>Send test to backend</button>
            {renderResponse()}
            {renderError()}
        </div>
    );
};