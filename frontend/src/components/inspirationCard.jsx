import "../index.css"

export const InspirationCard = ({ loading, inspiration }) => {

    if (loading) {
        return null;
    }

    if (!inspiration) {
        return null;
    }

    return (
        <>
        <div className="inspiration-card">
        <div>
            <h2>{inspiration.location}</h2>
            <p>{inspiration.why}</p>
        </div>
        <div className="option-card-container">
        <div className="option-card">
            <h3>Option 1: {inspiration.option1.budgetPerPerson.minimumBudget} - {inspiration.option1.budgetPerPerson.maximumBudget}</h3>
            <h4>Accomodation:</h4>
            <p>{inspiration.option1.accommodation}</p>
            <h4>Activities:</h4>
            <p>{inspiration.option1.activities}</p>
        </div>
        <div className="option-card">
            <h3>Option 2: {inspiration.option2.budgetPerPerson.minimumBudget} - {inspiration.option2.budgetPerPerson.maximumBudget}</h3>
            <h4>Accomodation:</h4>
            <p>{inspiration.option2.accommodation}</p>
            <h4>Activities:</h4>
            <p>{inspiration.option2.activities}</p>
        </div>
        <div className="option-card">
            <h3>Option 3: {inspiration.option3.budgetPerPerson.minimumBudget} - {inspiration.option3.budgetPerPerson.maximumBudget}</h3>
            <h4>Accomodation:</h4>
            <p>{inspiration.option3.accommodation}</p>
            <h4>Activities:</h4>
            <p>{inspiration.option3.activities}</p>
        </div>
        </div>
        </div>
        </>
    );
};