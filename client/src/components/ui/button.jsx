import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const CustomButton = ({text, onClick, variant, color, iconDirection, size}) => {

    let icon;

    if (iconDirection === "right") {
        icon = <ArrowForwardIosIcon/>;
    } else if (iconDirection === "left") {
        icon = <ArrowBackIosIcon/>;
    }

    return (
        <Button variant={variant} onClick={onClick} color={color} size={size}>
            {icon ? icon : text}
        </Button>
    );
};