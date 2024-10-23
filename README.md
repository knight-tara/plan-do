# Plan-Do
An AI-powered events idea generator, which returns suggestions based on the user's inputs (hen/stag/sten-dos only at the minute!).

Have a go yourself: [Plan-Do Link](https://plando.onrender.com/)

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Languages**: JavaScript
- **API Integration**: OpenAI

## Installation & Setup

Make sure that the following are installed for this project:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

1. Clone the repository:

   `git clone https://github.com/knight-tara/plan-do.git`

2. Navigate to the project directory:
   
   `cd plan-do`
  
3. Install the dependencies for both frontend and backend:

   **Backend:**

   `cd server`
   
   `npm install`

   **Frontend:**

   `cd ../client`
   
   `npm install`
   
5. Create a .env file in both the server directory and client directory and specify the below environment variables:

   **Backend:**

   `cd server`

   `touch .env`

   `echo "OPENAI_API_KEY=<your_api_key>" >> .env`

   `echo "PORT=3000" >> .env`

   **Frontend:**

   `cd client`

   `touch .env`
   
   `echo "VITE_BACKEND_URL=http://localhost:3000 >> .env`
   
## Running the Application
To start the application, you need to run both the backend and frontend servers:

1. Start the backend server:

   `cd server`

   `npm start`

2. In a new terminal, start the development server:

   `cd client`

   `npm run dev`
   
3. Navigate to `http://localhost:5173` and enjoy!

## What's next?

- Enhanced error handling
- Test coverage for both the backend and frontend

  Watch this space!
