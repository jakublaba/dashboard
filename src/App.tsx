import React from "react";
import "./styles/App.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Account from "./components/widgets/account/Account";
import ProductList from "./components/widgets/products/ProductList";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import themes from "./redux/theme/themes";
import {themeSelector} from "./redux/theme/themeSlice";
import SalesChart from "./components/SalesChart";
import OrderList from "./components/widgets/orders/OrdersList";


const App: React.FC = () => {
    const themeMode = useSelector(themeSelector);

    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route element={<Navbar/>}>
                <Route path="/" element={<ProductList/>}/>
                <Route path="orders" element={<OrderList/>}/>
                <Route path="ranking" element={<ProductList/>}></Route>
                <Route path="chart" element={<SalesChart/>}></Route>
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
