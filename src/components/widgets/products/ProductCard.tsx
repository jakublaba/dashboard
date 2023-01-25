import React from "react";
import ProductStatus, {StatusType} from "./ProductStatus";
import StarIcon from "@mui/icons-material/Star";
import {MenuItem, Stack} from "@mui/material";
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
            <Stack spacing={5} direction={"row"}>
                <img src={require(`/src/resources/img/${productProps.imgSrc}.svg`)} alt={productProps.name}/>
                {productProps.name}
                <ProductStatus status={productProps.status}/>
                <div>
                    {`${productProps.price}${languages.get(lang)!.widgets.products.currency}`}
                </div>
                <div>
                    {productProps.sortBy === "rating" ? productProps.avgRating : productProps.sold}
                    {productProps.sortBy === "rating" && (
                        <StarIcon/>
                    )}
                </div>
            </Stack>
        </MenuItem>
    );
};

export default ProductCard;
