import { TextField } from "@mui/material";

export const CustomTextField = ({ label, variant, color, onChange, size }) => {
    return (
        <TextField
            label={label}
            variant={variant}
            color={color}
            onChange={onChange}
            size={size}
        />
    );
};