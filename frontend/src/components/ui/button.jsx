import Button from '@mui/material/Button';

export const ButtonContained = ({text, onClick}) => {
    return (
        <Button variant="contained" onClick={onClick}>
            {text}
        </Button>
    );
};