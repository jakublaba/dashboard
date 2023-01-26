import React from "react";
import ProductStatus, {StatusType} from "./ProductStatus";
import StarIcon from "@mui/icons-material/Star";
import {Avatar, MenuItem, Stack} from "@mui/material";
import {useSelector} from "react-redux";
import languages from "../../../redux/lang/languages";
import {langSelector} from "../../../redux/lang/langSlice";

export interface Product {
    imgSrc: string,
    name: string,
    status: StatusType,
    price: number,
    avgRating: number,
    sold: number,
    sortBy?: "rating" | "sold"
}

// TODO - improve text alignment
const ProductCard: React.FC<Product> = (productProps) => {
    const lang = useSelector(langSelector);
    return (
        <MenuItem>
            <Stack
                spacing={5}
                direction={"row"}
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 100px)",
                    textAlign: "left",
                    verticalAlign: "middle"
                }}
            >
                <Avatar src={require(`/src/resources/img/${productProps.imgSrc}.svg`)} alt={productProps.name}/>
                {productProps.name}
                <ProductStatus status={productProps.status}/>
                <div>
                    {`${productProps.price}${languages.get(lang)!.widgets.products.currency}`}
                </div>
                <Stack
                    direction={"row"}
                    style={{
                        alignItems: "right"
                    }}
                >
                    {productProps.sortBy === "rating" ? productProps.avgRating : productProps.sold}
                    {productProps.sortBy === "rating" && (
                        <StarIcon
                            style={{
                                verticalAlign: "text-top"
                            }}
                        />
                    )}
                </Stack>
            </Stack>
        </MenuItem>
    );
};

export default ProductCard;
