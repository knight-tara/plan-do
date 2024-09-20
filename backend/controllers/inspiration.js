// DEFINE LOGIC FOR HANDLING REQUESTS

console.log('CONTROLLER API KEY:',process.env.OPENAI_API_KEY);

// import OpenAI from 'openai';

// const openAIClient = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY
// });

const getInspiration = () => {
    console.log("INSPIRED") //UPDATE
};

getInspiration();

// Define controller object for export (bundles functions)
const inspirationController = {
    getInspiration,
};

// Export controller object
export default inspirationController;