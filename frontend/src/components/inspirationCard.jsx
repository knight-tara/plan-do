export const InspirationCard = () => {

    const responseObject = {
        location: "Brighton",
        why: "Brighton is a vibrant seaside city known for its lively nightlife, unique attractions, and beautiful beach, making it perfect for a celebratory weekend.",
        option1: {
            activities: "Explore the Brighton Pier, visit the Royal Pavilion, enjoy street performances and free beach access",
            accommodation: "Budget hostels, affordable air BnB options",
            budgetPerPerson: {
                minimumBudget: "50",
                maximumBudget: "75"
            }
        },
        option2: {
            activities: "Guided tour of the Lanes, pub crawl, visit to the Brighton Museum and Art Gallery",
            accommodation: "Mid-range hotels, premium air BnB with sea view",
            budgetPerPerson: {
                minimumBudget: "75",
                maximumBudget: "100"
            }
        },
        option3: {
            activities: "Private group tour, VIP nightclub experience, sailing experience on the beach",
            accommodation: "Luxury hotels, top-tier sea view BnB",
            budgetPerPerson: {
                minimumBudget: "100",
                maximumBudget: "150"
            }
        }
}

    return (
        <>
        <div>
            <h2>{responseObject.location}</h2>
            <p>{responseObject.why}</p>
            <h3>Option 1: £{responseObject.option1.budgetPerPerson.minimumBudget} - £{responseObject.option1.budgetPerPerson.maximumBudget}</h3>
            <h4>Accomodation:</h4>
            <p>{responseObject.option1.accommodation}</p>
            <h4>Activities:</h4>
            <p>{responseObject.option1.activities}</p>
        </div>
        
        </>
    );
};