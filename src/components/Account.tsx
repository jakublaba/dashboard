import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import languages from "../redux/lang/languages";

const Account: React.FC = () => {
    const lang = useSelector((state: RootState) => state.lang.current);
    return (
        <div>
            <h1>
                {languages.get(lang)!.account}
            </h1>
        </div>
    );
};

export default Account;
