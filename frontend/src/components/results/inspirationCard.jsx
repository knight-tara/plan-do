import { OptionSlider } from "./optionSlider";

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
        <OptionSlider loading={loading} options={inspiration.options}  />
        </div>
        </div>
    );
};