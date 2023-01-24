import {AppBar, Toolbar} from "@mui/material";
import React from "react";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {IAuthState} from "../../redux/states";
import {Dispatch} from "redux";
import {IAction} from "../../redux/actions";
import LangButton from "./LangButton";
import ThemeButton from "./ThemeButton";
import AccountButton from "./AccountButton";

const Navbar: React.FC = () => {
    const authenticated = useSelector<IAuthState, boolean>(authState => authState.authenticated);
    const dispatch = useDispatch<Dispatch<IAction>>();

    const logout = () => {
        dispatch({
            type: "logout"
        });
    };

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
