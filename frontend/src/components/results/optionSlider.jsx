import Slider from "react-slick";
import { OptionCard } from "./optionCard"

export const OptionSlider = ({ loading, options }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings} className="option-slider">
            {options.map((option, index) => (
                <div key={index}>
                    <OptionCard loading={loading} option={option} index={index} />
                </div>
            ))}
        </Slider>
);
}