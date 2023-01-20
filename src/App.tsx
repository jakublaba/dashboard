import React, { useState } from "react";
import "./styles/App.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/Login";
import Ranking from "./components/Ranking";
import Chart from "./components/Chart";
import Account from "./components/Account";
import Feedback from "./components/Feedback";
import Orders from "./components/Orders";

export const pages = ["orders", "feedback", "ranking", "chart", "account"];

const App: React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    let [authState, setAuthState] = useState<object>({
        isLoggedIn: false,
        who: null,
    });

    const changeTheme = (): void => {
        setIsDarkTheme(!isDarkTheme);
    };

    // TODO - add remaining components to router
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route element={<Navbar />}>
                <Route path="/" element={<Login />}>
                    <Route path="orders" element={<Orders />} />
                    <Route path="feedback" element={<Feedback />}></Route>
                    <Route path="ranking" element={<Ranking />}></Route>
                    <Route path="chart" element={<Chart />}></Route>
                    <Route path="account" element={<Account />}></Route>
                </Route>
            </Route>,
        ])
    );

    return <RouterProvider router={router} />;
};

export default App;
