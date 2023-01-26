import React from "react";
import AccountCard from "./AccountCard";
import {Stack} from "@mui/material";
import OrderList from "../orders/OrdersList";

const Account: React.FC = () => {
    return (
        <Stack spacing={3}>
            <AccountCard/>
            <OrderList/>
        </Stack>
    );
};

export default Account;
