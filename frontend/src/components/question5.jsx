export const Question5 = ({ scrollToNext, scrollToPrevious }) => {

    const handleUkButtonClick = () => {
        sessionStorage.setItem("location", "UK");
    };

    const handleEuropeButtonClick = () => {
        sessionStorage.setItem("location", "europe");
    };

    const handleInspireMeButtonClick = () => {
        sessionStorage.setItem("location", "anywhere, inspire me");
    };

    const handleNextButtonClick = () => {
        scrollToNext();
    };

    const handlePreviousButtonClick = () => {
        scrollToPrevious();
    }

    return (
        <div className="question-container">
        <div>
            <h2>Plan-Do</h2>
        </div>
        <div>
            <h1>& Where?</h1>
        </div>
        <div>
            <button onClick={handleUkButtonClick}>UK</button>
            <button onClick={handleEuropeButtonClick}>Europe</button>
            <button onClick={handleInspireMeButtonClick}>Inspire Me!</button>
        </div>
        <div>
            <button onClick={handlePreviousButtonClick}>Previous</button>
            <button onClick={handleNextButtonClick}>Next</button>
        </div>
        </div>
    );

};