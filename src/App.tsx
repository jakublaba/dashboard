import React from "react";
import "./styles/App.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/Login";
import Ranking from "./components/Ranking";
import Chart from "./components/Chart";
import Account from "./components/Account";
import Feedback from "./components/Feedback";
import Orders from "./components/Orders";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

export const pages = ["orders", "feedback", "ranking", "chart", "account"];

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
});

const App: React.FC = () => {
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route element={<Navbar/>}>
                <Route path="/" element={<Login/>}/>
                <Route path="orders" element={<Orders/>}/>
                <Route path="feedback" element={<Feedback/>}></Route>
                <Route path="ranking" element={<Ranking/>}></Route>
                <Route path="chart" element={<Chart/>}></Route>
                <Route path="account" element={<Account/>}></Route>
            </Route>
        ])
    );

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    );
};

export default App;
