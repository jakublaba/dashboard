import React, {useState} from "react";
import {IconButton} from "@mui/material";
import ReactCountryFlag from "react-country-flag";

const LangButton: React.FC = () => {
    // TODO - this will be a selector from store
    const [lang, setLang] = useState<"PL" | "GB">("GB");

    // TODO - this will dispatch an action
    const switchLang = () => {
        setLang(lang => lang === "PL" ? "GB" : "PL");
    }

    return (
        <IconButton onClick={switchLang}>
            <ReactCountryFlag countryCode={lang} svg/>
        </IconButton>
    );
};

export default LangButton;
