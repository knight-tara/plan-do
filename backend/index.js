// SERVER SETUP

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

console.log('INDEX API KEY:', process.env.OPENAI_API_KEY)

// Import main application logic
import app from './app.js';

// Define function that starts the server & makes it listen for incoming HTTP requests
const listenForRequests = () => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Now listening on port ${PORT}`);
    });
};

// Call function
listenForRequests();


