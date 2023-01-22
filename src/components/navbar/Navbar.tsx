import {AppBar, Toolbar} from "@mui/material";
import React from "react";
import {Link, Outlet} from "react-router-dom";
import {pages} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {IAuthState} from "../../redux/states";
import {Dispatch} from "redux";
import {IAction} from "../../redux/actions";
import "../../styles/NavbarItem.css"

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
                    {pages.map((page) => (
                        <Link className={"button-81"} key={page} to={`/${page}`}>
                            {`${page.charAt(0).toUpperCase()}${page.slice(1)}`}
                        </Link>
                    ))}
                    {authenticated ? (
                        <div className={"button-81"} onClick={logout}>
                            Logout
                        </div>
                    ) : (
                        <Link className={"button-81"} to={"/"}>
                            Login
                        </Link>
                    )}
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    );
};

export default Navbar;
