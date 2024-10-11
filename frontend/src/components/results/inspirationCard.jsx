import { OptionCard } from "./optionCard";

export const InspirationCard = ({ loading, inspiration }) => {

    if (loading) {
        return null;
    }

    if (!inspiration) {
        return null;
    }

    return (
        <div className="inspiration-card">
        <div>
            <h2>{inspiration.location}</h2>
            <p>{inspiration.why}</p>
        </div>
        <div>
            {inspiration.options.map((option, index) => (
                <div key={index}>
                    <OptionCard loading={loading} option={option} index={index + 1} />
                </div>
            ))} 
        </div>
        </div>
    );
};