// FUNCTIONS ENCAPSULATING COMMUNICATION WITH THE BACKEND

// Retrieve & store backend URL
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Define function to retrieve data by sending a POST request to the backend
export const getInspiration = async (userInput) => {

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInput),
    };

    const response = await fetch(`${BACKEND_URL}/inspiration`, requestOptions);

    console.log("Backend URL:", {BACKEND_URL});

    if (response.status !== 200) {
        throw new Error('Unable to retrieve favourites');
    }

    const data = await response.json();

    return data;
};