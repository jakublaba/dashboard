import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import React from "react";
import {IconButton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {toggleTheme} from "../../redux/theme/themeSlice";

const ThemeButton: React.FC = () => {
    const themeMode = useSelector((state: RootState) => state.theme.current);
    const dispatch = useDispatch();

    const switchTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <IconButton onClick={switchTheme}>
            {themeMode === "light"
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
