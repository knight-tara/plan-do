import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fe5474',
            dark: '#fdc16c',
    },
    secondary: {
        main: '#FFFFFF',
        dark: '#fdc16c',
        contrastText: '#fe5474',
    },
},
});

export default theme;

