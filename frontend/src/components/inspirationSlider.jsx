// TO DO:
// - add mapping function to JSX

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
        <Slider {...settings} className="slider">
            <div>
                <InspirationCard loading={loading} inspiration={inspirationResults[0]}/>
            </div>
            <div>
                <InspirationCard loading={loading} inspiration={inspirationResults[1]}/>
            </div>
            <div>
                <InspirationCard loading={loading} inspiration={inspirationResults[2]}/>
            </div>
        </Slider>
);
}