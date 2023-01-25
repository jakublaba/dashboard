import React from "react";
import {IconButton} from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Lang, toggleLang} from "../../redux/langSlice";

const LangButton: React.FC = () => {
    const lang = useSelector<RootState, Lang>(state => state.lang.current);
    const dispatch = useDispatch();

    const switchLang = () => {
        dispatch(toggleLang());
    }

    return (
        <IconButton onClick={switchLang}>
            <ReactCountryFlag countryCode={lang === "PL" ? "PL" : "GB"} svg/>
        </IconButton>
    );
};

export default LangButton;
