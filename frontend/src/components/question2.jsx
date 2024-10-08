import { QuestionContainer } from "./questionContainer";

export const Question2 = ({ scrollToNext }) => {

    const handleHenButtonClick = () => {
        sessionStorage.setItem('eventType', 'hen');
    };

    const handleStagButtonClick = () => {
        sessionStorage.setItem('eventType', 'stag');
    };

    const handleStenButtonClick = () => {
        sessionStorage.setItem('eventType', 'sten');
    };


    return (
        <QuestionContainer>
        <div>
            <h2>Plan-Do</h2> 
        </div>
        <div>
            <h1>First things first ...</h1>
        </div>
        <div>
            <button onClick={handleHenButtonClick}>Hen</button>
            <button onClick={handleStagButtonClick}>Stag</button>
            <button onClick={handleStenButtonClick}>Sten</button>
        </div>
        <div>
            <button onClick={scrollToNext}>Next</button>
        </div>
        </QuestionContainer>
    );

};