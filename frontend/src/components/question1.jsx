import { QuestionContainer } from "./questionContainer";
import { useRef } from "react";

export const Question1 = () => {

    return (
        <QuestionContainer>
        <div>
            <h2>Plan-Do</h2> 
        </div>
        <div>
            <h1>Ready to plan?</h1>
        </div>
        <div>
            <button>Yes</button>
            <button>Yes</button>
            <button>Yes</button>
        </div>
        </QuestionContainer>
    );

};