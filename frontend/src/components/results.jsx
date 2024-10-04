import { getInspiration } from '../services/inspiration';
import { useState } from 'react';
import { Loading } from '../components/loading' //ADD LOADING SCREEN


export const Results = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const testAPI = async () => {

        const userInput = {
            eventType: "hen",
            noOfGuests: 15,
            noOfDays: 3,
            location: "UK",
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
            <h2>Plan-Do</h2>
            <h1>Here are your results ...</h1>
            <button onClick={testAPI}>Show me</button>
            {renderResponse()}
            {renderError()}
        </div>
    );
};