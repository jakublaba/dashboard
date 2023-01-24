import React from "react";
import OrderHeader from "./OrderHeader";
import Status, {StatusType} from "./Status";
import {Box} from "@mui/material";

const OrderList: React.FC = () => {
    const s: StatusType[] = ["out", "low", "in"];

    return (
        <Box display={"inline-block"}>
            <OrderHeader/>
            {s.map(e => (
                <Status status={e}></Status>
            ))}
        </Box>
    );
};

export default OrderList;
