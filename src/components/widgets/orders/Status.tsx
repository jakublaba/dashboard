import React from "react";
import {Paper} from "@mui/material";

export type StatusType = "out" | "low" | "in";

const styles = new Map<StatusType, { card: string, font: string, text: string }>([
    ["out", {card: "#453235", font: "#FFAC82", text: "Out of stock"}],
    ["low", {card: "#453F2D", font: "#FFD666", text: "Low stock"}],
    ["in", {card: "#254141", font: "#76CC9A", text: "In stock"}]
]);

const Status: React.FC<{ status: StatusType }> = ({status}) => {
    return (
        <Paper style={{
            textAlign: "center",
            width: "fit-content",
            backgroundColor: styles.get(status)?.card,
            color: styles.get(status)?.font
        }}>
            {styles.get(status)?.text}
        </Paper>
    );
};

export default Status;
