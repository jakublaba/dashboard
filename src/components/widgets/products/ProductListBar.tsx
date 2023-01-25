import React from "react";
import {Button, IconButton, MenuItem, Stack} from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

export interface ProductListBarProps {
    sortCriteria: "rating" | "sold",
    sortAscending: boolean,
    toggleSortCriteriaHandler: () => void,
    toggleSortDirectionHandler: () => void
}

const ProductListBar: React.FC<ProductListBarProps> = (productBarProps) => {
    const {sortCriteria, sortAscending, toggleSortCriteriaHandler, toggleSortDirectionHandler} = {...productBarProps};

    return (
        <MenuItem>
            <Stack spacing={5} direction={"row"}>
                <div>
                    Produkt
                </div>
                <div>
                    Status
                </div>
                <div>
                    Cena
                </div>
                <div>
                    <IconButton onClick={toggleSortDirectionHandler}>
                        {sortAscending ? <ArrowCircleUpIcon/> : <ArrowCircleDownIcon/>}
                    </IconButton>
                    <Button onClick={toggleSortCriteriaHandler}>
                        {sortCriteria === "rating" ? "Avg rating" : "Sold"}
                    </Button>
                </div>
            </Stack>
        </MenuItem>
    );
};

export default ProductListBar;
