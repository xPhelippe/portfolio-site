import { createTheme } from "@mui/material/styles";

const theme = createTheme( {
    palette: {
        primary: {
            main: '#f2f2f2'
        },
        secondary: {
            main: "#1F4327"
        }
    },
    typography: {
        button: {
            fontWeight: 570,
            textTransform: 'none',
            fontSize: 18
        }
    }
})

export default theme