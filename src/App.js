import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./components/homePage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import pages from "./utils/pages";
import NoPageFound from "./components/404page";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Page />}>
                        <Route index element={<HomePage />} />

                        {pages.map((page, idx) => {
                            const Comp = page.component;
                            return (
                                <Route
                                    key={idx}
                                    path={page.link.substring(1)}
                                    element={<Comp />}
                                />
                            );
                        })}
                        <Route path="*" element={<NoPageFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );

    // return (
    //   <ThemeProvider theme={theme}>
    //     <div className="App">
    //       <div className="app-body">
    //         <Header />
    //         <HomePage />
    //       </div>
    //       <div className="footer">
    //       <Footer />
    //       </div>
    //     </ div >
    //   </ThemeProvider>
    // );
}

export default App;
