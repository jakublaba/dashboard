import React from "react";
import {useSelector} from "react-redux";
import {langSelector} from "../../../redux/lang/langSlice";
import {Avatar, Paper} from "@mui/material";
import languages from "../../../redux/lang/languages";

const AccountCard: React.FC = () => {
    const lang = useSelector(langSelector);

    return (
        <Paper>
            <Avatar
                alt={languages.get(lang)!.profPicAlt}
                src={"/resources/img/profile_pic.svg"}
            />
        </Paper>
    );
};

export default AccountCard;
