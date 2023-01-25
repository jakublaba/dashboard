import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import React, {useState} from "react";
import {IconButton} from "@mui/material";

const ThemeButton: React.FC = () => {
    // TODO - this will be selector from store
    const [mode, setMode] = useState<"light" | "dark">("dark");

    // TODO - this will dispatch an action
    const switchTheme = () => {
        setMode(mode === "light" ? "dark" : "light");
    };

    return (
        <IconButton onClick={switchTheme}>
            {mode === "light"
                ? (
                    <LightModeIcon/>
                ) : (
                    <DarkModeIcon/>
                )
            }
        </IconButton>
    );
};

export default ThemeButton;
