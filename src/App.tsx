import React, {useState} from 'react';
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {ProductRanking} from "./components/ProductRanking";
import {ctxAuth} from "./auth/auth";
import {Orders} from "./components/Orders";
import {CustomerFeedback} from "./components/CustomerFeedback";
import {SalesChart} from "./components/SalesChart";
import {MyAccount} from "./components/MyAccount";

function App() {
    let [authState, setAuthState] = useState<object>({
        isLoggedIn: false,
        who: null
    });

    const login = (username: string): void => {
        setAuthState({
            isLoggedIn: true,
            who: username
        });
    };

    const logout = (): void => {
        setAuthState({
            isLoggedIn: false,
            who: null
        });
    };

    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path="/">
                <Route path="orders" element={<Orders/>}></Route>
                <Route path="feedback" element={<CustomerFeedback/>}></Route>
                <Route path="ranking" element={<ProductRanking/>}></Route>
                <Route path="chart" element={<SalesChart/>}></Route>
                <Route path="account" element={<MyAccount/>}></Route>
            </Route>
        ])
    );

    return (
        <div className="App">
            <ctxAuth.Provider value={{authState, login, logout}}>
                <RouterProvider router={router}/>
            </ctxAuth.Provider>
        </div>
    );
}

export default App;
