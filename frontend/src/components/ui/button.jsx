import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const CustomButton = ({text, onClick, variant, color, iconDirection}) => {

    let icon;

    if (iconDirection === "right") {
        icon = <ArrowForwardIosIcon/>;
    } else if (iconDirection === "left") {
        icon = <ArrowBackIosIcon/>;
    }

    return (
        <Button variant={variant} onClick={onClick} color={color}>
            {icon ? icon : text}
        </Button>
    );
};