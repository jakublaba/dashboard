import React from "react";
import AccountCard from "./AccountCard";
import CommentList from "../feedback/CommentList";
import {Stack} from "@mui/material";

const Account: React.FC = () => {
    return (
        <Stack spacing={3}>
            <AccountCard/>
            <CommentList/>
        </Stack>
    );
};

export default Account;
