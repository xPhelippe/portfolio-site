import './index.css'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import Footer from '../footer';
import theme from '../../theme';
function Page(props) {
    return (
        <>
        <ThemeProvider theme={theme}>
            <div className="App">
                <div className="app-body">
                <Outlet />
                </div>
                <div className="footer">
                <Footer />
                </div>
            </ div >
        </ThemeProvider>
        </>
    )
}

export default Page