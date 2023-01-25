import React from "react";
import "./styles/App.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Ranking from "./components/Ranking";
import Chart from "./components/Chart";
import Account from "./components/Account";
import Feedback from "./components/Feedback";
import ProductList from "./components/widgets/products/ProductList";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {RootState} from "./redux/store";
import {useSelector} from "react-redux";
import themes from "./redux/theme/themes";


const App: React.FC = () => {
    const themeMode = useSelector((state: RootState) => state.theme.current);

    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route element={<Navbar/>}>
                <Route path="/" element={<ProductList/>}/>
                <Route path="orders" element={<ProductList/>}/>
                <Route path="feedback" element={<Feedback/>}></Route>
                <Route path="ranking" element={<Ranking/>}></Route>
                <Route path="chart" element={<Chart/>}></Route>
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
