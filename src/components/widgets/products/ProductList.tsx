import React, {useState} from "react";
import products from "../../../resources/placeholder-data/products";
import ProductCard from "./ProductCard";
import ProductListBar from "./ProductListBar";
import {MenuList, Paper} from "@mui/material";

const ProductList: React.FC = () => {
    const [sortCriteria, setSortCriteria] = useState<"rating" | "sold">("rating");
    const [sortAscending, setSortAscending] = useState<boolean>(true);

    const toggleSortCriteria = () => {
        setSortCriteria(sortCriteria === "rating" ? "sold" : "rating");
    }

    const toggleSortDirection = () => {
        setSortAscending(sortAscending => !sortAscending);
    };

    return (
        <Paper elevation={1}>
            <MenuList>
                <ProductListBar
                    sortCriteria={sortCriteria}
                    sortAscending={sortAscending}
                    toggleSortCriteriaHandler={toggleSortCriteria}
                    toggleSortDirectionHandler={toggleSortDirection}
                />
                {products
                    .sort((p1, p2) => sortCriteria === "rating"
                        ? sortAscending ? p1.avgRating - p2.avgRating : p2.avgRating - p1.avgRating
                        : sortAscending ? p1.sold - p2.sold : p2.sold - p1.sold
                    )
                    .map((p, idx) => (
                        <ProductCard
                            key={idx}
                            imgSrc={p.imgSrc}
                            name={p.name}
                            status={p.status}
                            price={p.price}
                            avgRating={p.avgRating}
                            sold={p.sold}
                            sortBy={sortCriteria}
                        />
                    ))}
            </MenuList>
        </Paper>
    );
};

export default ProductList;
