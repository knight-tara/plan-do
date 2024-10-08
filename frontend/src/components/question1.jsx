import { ComponentContainer } from "./componentContainer";

export const Question1 = ({ scrollToNext }) => {

    const handleClickYes = () => {
        scrollToNext();
    };

    return (
        <ComponentContainer>
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
        </ComponentContainer>
    );

};