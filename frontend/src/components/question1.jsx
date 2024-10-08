import { QuestionContainer } from "./questionContainer";

export const Question1 = ({ scrollToNext }) => {

    const handleClickYes = () => {
        scrollToNext();
    };

    return (
        <QuestionContainer>
        <div>
            <h2>Plan-Do</h2> 
        </div>
        <div>
            <h1>Ready to plan?</h1>
        </div>
        <div>
            <button onClick={handleClickYes}>Yes</button>
            <button onClick={handleClickYes}>Yes</button>
            <button onClick={handleClickYes}>Yes</button>
        </div>
        </QuestionContainer>
    );

};