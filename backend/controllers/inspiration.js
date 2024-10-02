// DEFINE LOGIC FOR HANDLING REQUESTS

import OpenAI from 'openai';

const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const getInspiration = async (req, res) => {

    const userInput = {
        eventType: req.body.eventType,
        noOfGuests: req.body.noOfGuests,
        noOfDays: req.body.noOfDays,
        location: req.body.location,
        accomodation: req.body.accomodation,
        activities: req.body.activities,
        budget: req.body.budget,
    };
    // console.log(userInput.eventType);

    const completion = await openAI.chat.completions.create({
        messages:[
            {
                "role": "system",
                "content": "You are a helpful assistant"
            },
            {
                "role": "user",
                "content": `I want you to help me organise a ${userInput.eventType} party`
            },
        ],
        model: "gpt-4o"
    })
    console.log(completion.choices[0].message.content);
};

// getInspiration();

// Define controller object for export (bundles functions)
const inspirationController = {
    getInspiration,
};

// Export controller object
export default inspirationController;