import React from "react";
import {Paper, Stack} from "@mui/material";
import {useSelector} from "react-redux";
import languages from "../../../redux/lang/languages";
import {langSelector} from "../../../redux/lang/langSlice";

export type StatusType = "out" | "low" | "in";

const styles = new Map<StatusType, { card: string, font: string }>([
    ["out", {card: "#453235", font: "#FFAC82"}],
    ["low", {card: "#453F2D", font: "#FFD666"}],
    ["in", {card: "#254141", font: "#76CC9A"}]
]);

const ProductStatus: React.FC<{ status: StatusType }> = ({status}) => {
    const lang = useSelector(langSelector);

    return (
        <Paper
            component={Stack}
            justifyContent={"center"}
            style={{
                textAlign: "center",
                backgroundColor: styles.get(status)?.card,
                color: styles.get(status)?.font,
                width: 60,
                height: 30
            }}
        >
            {languages.get(lang)!.widgets.products.productStatus.get(status)}
        </Paper>
    );
};

export default ProductStatus;
