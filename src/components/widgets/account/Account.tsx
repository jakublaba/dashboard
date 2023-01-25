import React from "react";
import {useSelector} from "react-redux";
import {langSelector} from "../../../redux/lang/langSlice";
import AccountCard from "./AccountCard";

const Account: React.FC = () => {
    const lang = useSelector(langSelector);
    return (
        <AccountCard/>
    );
};

export default Account;
