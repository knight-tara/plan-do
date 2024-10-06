// TO DO:
// add functionality to next and previous buttons

export const Question5 = () => {

    const handleUkButtonClick = () => {
        sessionStorage.setItem("location", "UK");
    }

    const handleEuropeButtonClick = () => {
        sessionStorage.setItem("location", "europe");
    }

    const handleInspireMeButtonClick = () => {
        sessionStorage.setItem("location", "anywhere, inspire me");
    }

    return (
        <>
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
            <button>Previous</button>
            <button>Next</button>
        </div>
        </>
    );

};