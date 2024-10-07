export const InspirationCard = (responseObject) => {

    return (
        <>
        <div>
            <h2>{responseObject.location}</h2>
            <p>{responseObject.why}</p>
        </div>
        <div>
            <h3>Option 1: £{responseObject.option1.budgetPerPerson.minimumBudget} - £{responseObject.option1.budgetPerPerson.maximumBudget}</h3>
            <h4>Accomodation:</h4>
            <p>{responseObject.option1.accommodation}</p>
            <h4>Activities:</h4>
            <p>{responseObject.option1.activities}</p>
        </div>
        <div>
            <h3>Option 2: £{responseObject.option2.budgetPerPerson.minimumBudget} - £{responseObject.option2.budgetPerPerson.maximumBudget}</h3>
            <h4>Accomodation:</h4>
            <p>{responseObject.option2.accommodation}</p>
            <h4>Activities:</h4>
            <p>{responseObject.option2.activities}</p>
        </div>
        <div>
            <h3>Option 3: £{responseObject.option3.budgetPerPerson.minimumBudget} - £{responseObject.option3.budgetPerPerson.maximumBudget}</h3>
            <h4>Accomodation:</h4>
            <p>{responseObject.option3.accommodation}</p>
            <h4>Activities:</h4>
            <p>{responseObject.option3.activities}</p>
        </div>
        </>
    );
};