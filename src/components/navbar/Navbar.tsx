import {AppBar, Toolbar} from "@mui/material";
import React from "react";
import {Outlet} from "react-router-dom";
import LangButton from "./LangButton";
import ThemeButton from "./ThemeButton";
import AccountButton from "./AccountButton";

const Navbar: React.FC = () => {
    return (
        <>
            <AppBar position={"sticky"}>
                <Toolbar>
                    <LangButton/>
                    <ThemeButton/>
                    <AccountButton/>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    );
};

export default Navbar;
