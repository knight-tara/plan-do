import Slider from "react-slick";
import { InspirationCard } from "./inspirationCard"

export const InspirationSlider = ({ loading, inspirationResults }) => {

    const settings = {
        dots: false,
        infinite: false,
        centerMode: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
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