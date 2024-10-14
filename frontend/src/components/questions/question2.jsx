import icon from "../../assets/plan-do-icon-white.png";
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
        <div className="question-container horizontal-scroll-style">
        <div>
        <img src={icon} alt="plan-do-icon-white" className="icon-white" />
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
        </div>
    );

};