import React from "react";
import "./styles/App.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Account from "./components/widgets/account/Account";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import themes from "./redux/theme/themes";
import {themeSelector} from "./redux/theme/themeSlice";
import Home from "./components/Home";


const App: React.FC = () => {
    const themeMode = useSelector(themeSelector);

    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route element={<Navbar/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="account" element={<Account/>}></Route>
            </Route>
        ])
    );

    return (
        <ThemeProvider theme={themes.get(themeMode)!}>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    );
};

export default App;
