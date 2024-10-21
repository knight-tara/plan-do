export const OptionCard = ({ loading, option, index }) => {

    if (loading) {
        return null;
    }

    if (!option) {
        return null;
    }

    return (
        <div className="option-card">
            <h3>Option {index} : {option.budgetPerPerson.minimumBudget} - {option.budgetPerPerson.maximumBudget} </h3>
            <h4>Accommodation:</h4>
            {option.accommodation.map((accommodation, index) => (
                <p key={index}>{accommodation}</p>
            ))}
            <h4>Activities:</h4>
            {option.activities.map((activity, index) => (
                <p key={index}>{activity}</p>
            ))}
        </div>
    );
};