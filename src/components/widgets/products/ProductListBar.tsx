import React from "react";
import {Button, IconButton, MenuItem, Paper, Stack, Typography} from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import {useSelector} from "react-redux";
import languages from "../../../redux/lang/languages";
import {langSelector} from "../../../redux/lang/langSlice";

export interface ProductListBarProps {
    sortCriteria: "rating" | "sold",
    sortAscending: boolean,
    toggleSortCriteriaHandler: () => void,
    toggleSortDirectionHandler: () => void
}

const ProductListBar: React.FC<ProductListBarProps> = (productBarProps) => {
    const {sortCriteria, sortAscending, toggleSortCriteriaHandler, toggleSortDirectionHandler} = {...productBarProps};
    const lang = useSelector(langSelector);

    return (
        <MenuItem>
            <Stack
                spacing={5}
                direction={"row"}
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 100px)",
                    textAlign: "left"
                }}
            >
                <Typography variant={"subtitle1"}>
                    {languages.get(lang)!.widgets.products.menuBar.product}
                </Typography>
                <div/>
                <Typography variant={"subtitle1"}>
                    {languages.get(lang)!.widgets.products.menuBar.status}
                </Typography>
                <Typography variant={"subtitle1"}>
                    {languages.get(lang)!.widgets.products.menuBar.price}
                </Typography>
                <Paper
                    style={{
                        width: "fit-content",
                        height: "fit-content"
                    }}
                >
                    <IconButton onClick={toggleSortDirectionHandler}>
                        {sortAscending ? <ArrowCircleUpIcon/> : <ArrowCircleDownIcon/>}
                    </IconButton>
                    <Button onClick={toggleSortCriteriaHandler}>
                        {languages.get(lang)!.widgets.products.menuBar.sortCriteria.get(sortCriteria)}
                    </Button>
                </Paper>
            </Stack>
        </MenuItem>
    );
};

export default ProductListBar;
