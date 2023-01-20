import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { pages } from "../../App";
import NavbarItem from "./NavbarItem";

const Navbar: React.FC = () => (
    <>
        <AppBar style={{ background: "white" }}>
            <Toolbar>
                {pages.map((page) => (
                    <NavbarItem page={page} />
                ))}
            </Toolbar>
        </AppBar>
        <Outlet />
    </>
);

export default Navbar;
