// DEFINE LOGIC FOR HANDLING REQUESTS

import OpenAI from 'openai';

const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const getInspiration = async () => {
    const completion = await openAI.chat.completions.create({
        messages:[
            {
                "role": "system",
                "content": "You are a helpful assistant"
            },
            {
                "role": "user",
                "content": "What day is Christmas?"
            }
        ],
        model: "gpt-4o"
    })
    console.log(completion.choices[0].message.content);
};

getInspiration();

// Define controller object for export (bundles functions)
const inspirationController = {
    getInspiration,
};

// Export controller object
export default inspirationController;