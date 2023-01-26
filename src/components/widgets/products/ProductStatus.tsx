import React from "react";
import {Paper} from "@mui/material";
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
        <Paper style={{
            textAlign: "center",
            width: "fit-content",
            height: "fit-content",
            backgroundColor: styles.get(status)?.card,
            color: styles.get(status)?.font
        }}>
            {languages.get(lang)!.widgets.products.productStatus.get(status)}
        </Paper>
    );
};

export default ProductStatus;
