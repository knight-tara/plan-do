// SERVER SETUP

// Load environment variables
import 'dotenv/config';

// Import main application logic
import app from './app.js';

// Define function that starts the server & makes it listen for incoming HTTP requests
const listenForRequests = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Now listening on port ${process.env.PORT}`);
    });
};

// Call function
listenForRequests();


