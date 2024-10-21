// DEFINE LOGIC FOR HANDLING REQUESTS

import OpenAI from 'openai/index.mjs';

const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const getInspiration = async (req, res) => {

    const userInput = {
        eventType: req.body.eventType,
        noOfGuests: req.body.noOfGuests,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        location: req.body.location,
        budget: req.body.budget,
    };

    const completion = await openAI.chat.completions.create({
        messages:[
            {
                "role": "system",
                "content": "You are a helpful assistant"
            },
            {
                "role": "user",
                "content": `I want you to help me organise a ${userInput.eventType} party. The event will start on ${userInput.startDate} and end ${userInput.endDate} and there will be ${userInput.noOfGuests} guests. I want the event to be in ${userInput.location} and the budget is ${userInput.budget}. Please provide 3 location ideas in raw JSON format without using markdown formatting or code blocks - each location idea should have the following structure: {"location": "location name", "why": "one or two sentences on why you have chosen this location for the event", "options": [{"activities": "a list of activity suggestions","accommodation": "a list of accommodation suggestions e.g. air BnB, hotel","budgetPerPerson": {"minimumBudget": "minimum budget per person based on activities, location and accommodation","maximumBudget": "maximum budget per person based on activities, location and accommodation"}},{"activities": "a list of activity suggestions","accommodation": "a list of accommodation suggestions e.g. air BnB, hotel","budgetPerPerson": {"minimumBudget": "minimum budget per person based on activities, location and accommodation","maximumBudget": "maximum budget per person based on activities, location and accommodation"}},{"activities": "a list of activity suggestions","accommodation": "a list of accommodation suggestions e.g. air BnB, hotel","budgetPerPerson": {"minimumBudget": "minimum budget per person based on activities, location and accommodation","maximumBudget": "maximum budget per person based on activities, location and accommodation"}}]}. Option 1 should be the cheapest, option 2 mid-range and option 3 the most expensive - include £ in the budget numbers.. Do not include anything other than the JSON data in your response.`
            },
        ],
        model: "gpt-4o"
    })
    const response = completion.choices[0].message.content;
    // console.log(response);
    res.json(JSON.parse(response));
};

// Define controller object for export (bundles functions)
const inspirationController = {
    getInspiration,
};

// Export controller object
export default inspirationController;