import React from "react";
import {useSelector} from "react-redux";
import languages from "../../../redux/lang/languages";
import {langSelector} from "../../../redux/lang/langSlice";

const Account: React.FC = () => {
    const lang = useSelector(langSelector);
    return (
        <div>
            <h1>
                {languages.get(lang)!.account}
            </h1>
        </div>
    );
};

export default Account;
