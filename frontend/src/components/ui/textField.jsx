import { TextField } from "@mui/material";

export const CustomTextField = ({ label, variant, color, onChange }) => {
    return (
        <TextField
            label={label}
            variant={variant}
            color={color}
            onChange={onChange}
        />
    );
};