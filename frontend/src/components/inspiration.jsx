import { ComponentContainer } from "./componentContainer";
// import { Loading } from "./loading"; //ADD LOADING SCREEN
import { InspirationCard } from "./inspirationCard"

export const Inspiration = ({ loading, inspirationResults }) => {
    if (loading) {
        return <p>Loading ...</p>;
    }

    if (!inspirationResults || inspirationResults.length === 0) {
        return <p>No results found</p>;
    }

    return (
        <ComponentContainer>
        <div>
            <h2>Plan-Do</h2>
            <h1>Here are your results ...</h1>
            <InspirationCard loading={loading} inspiration={inspirationResults[0]}/>
            <InspirationCard loading={loading} inspiration={inspirationResults[1]}/>
            <InspirationCard loading={loading} inspiration={inspirationResults[2]}/>
        </div>
        </ComponentContainer>
    );
};
