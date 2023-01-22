import {AppBar, Toolbar} from "@mui/material";
import React from "react";
import {Outlet} from "react-router-dom";
import {pages} from "../../App";
import NavbarItem from "./NavbarItem";
import {useSelector} from "react-redux";
import {IAuthState} from "../../redux/states";

const Navbar: React.FC = () => {
    const authenticated = useSelector<IAuthState, boolean>(authState => authState.authenticated);

    return (
        <>
            <AppBar position={"sticky"}>
                <Toolbar>
                    {pages.map((page) => (
                        <NavbarItem page={page}/>
                    ))}
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    );
};

export default Navbar;
