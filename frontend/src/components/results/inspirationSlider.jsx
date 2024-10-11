import Slider from "react-slick";
import { InspirationCard } from "./inspirationCard"

export const InspirationSlider = ({ loading, inspirationResults }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings} className="inspiration-slider">
            {inspirationResults.map((inspiration, index) => (
                <div key={index}>
                    <InspirationCard loading={loading} inspiration={inspiration} />
                </div>
            ))}
        </Slider>
);
}