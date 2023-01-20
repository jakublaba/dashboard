import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavbarItem.css";

const NavbarItem: React.FC<{ page: string }> = ({ page }) => (
    <Link className="button-81" key={page} to={`/${page}`}>
        {`${page.charAt(0).toUpperCase()}${page.slice(1)}`}
    </Link>
);

export default NavbarItem;
