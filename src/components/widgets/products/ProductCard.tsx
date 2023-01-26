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
                    gridTemplateColumns: "repeat(4, 8vw)",
                    verticalAlign: "middle"
                }}
            >
                <Stack
                    spacing={1}
                    direction={"row"}
                >
                    <Avatar
                        variant={"rounded"}
                        src={require(`/src/resources/img/${productProps.imgSrc}.svg`)} alt={productProps.name}
                        style={{
                            width: 50,
                            height: 50
                        }}
                    />
                    <Stack justifyContent={"center"}>
                        {productProps.name}
                    </Stack>
                </Stack>
                <Stack justifyContent={"center"}>
                    <ProductStatus status={productProps.status}/>
                </Stack>
                <Stack justifyContent={"center"}>
                    {`${productProps.price}${languages.get(lang)!.widgets.products.currency}`}
                </Stack>
                <Stack justifyContent={"center"}>
                    <Stack
                        direction={"row"}
                        style={{
                            transform: "translate(1vw, 0)"
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
            </Stack>
        </MenuItem>
    );
};

export default ProductCard;
