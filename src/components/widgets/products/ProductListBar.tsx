import React from "react";
import {Button, IconButton, MenuItem, Stack} from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import languages from "../../../redux/lang/languages";

export interface ProductListBarProps {
    sortCriteria: "rating" | "sold",
    sortAscending: boolean,
    toggleSortCriteriaHandler: () => void,
    toggleSortDirectionHandler: () => void
}

const ProductListBar: React.FC<ProductListBarProps> = (productBarProps) => {
    const {sortCriteria, sortAscending, toggleSortCriteriaHandler, toggleSortDirectionHandler} = {...productBarProps};
    const lang = useSelector((state: RootState) => state.lang.current);

    return (
        <MenuItem>
            <Stack spacing={5} direction={"row"}>
                <div>
                    {languages.get(lang)!.productMenuBar.product}
                </div>
                <div>
                    {languages.get(lang)!.productMenuBar.status}
                </div>
                <div>
                    {languages.get(lang)!.productMenuBar.price}
                </div>
                <div>
                    <IconButton onClick={toggleSortDirectionHandler}>
                        {sortAscending ? <ArrowCircleUpIcon/> : <ArrowCircleDownIcon/>}
                    </IconButton>
                    <Button onClick={toggleSortCriteriaHandler}>
                        {languages.get(lang)!.productMenuBar.sortCriteria.get(sortCriteria)}
                    </Button>
                </div>
            </Stack>
        </MenuItem>
    );
};

export default ProductListBar;
