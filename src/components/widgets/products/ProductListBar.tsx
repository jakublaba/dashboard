import React, {useRef, useState} from "react";
import {Grow, IconButton, MenuItem, Paper, Popper, Stack, Typography} from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import {useSelector} from "react-redux";
import languages from "../../../redux/lang/languages";
import {langSelector} from "../../../redux/lang/langSlice";
import SellIcon from "@mui/icons-material/Sell";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

export interface ProductListBarProps {
    sortCriteria: "rating" | "sold",
    sortAscending: boolean,
    toggleSortCriteriaHandler: () => void,
    toggleSortDirectionHandler: () => void
}

const ProductListBar: React.FC<ProductListBarProps> = (productBarProps) => {
    const {sortCriteria, sortAscending, toggleSortCriteriaHandler, toggleSortDirectionHandler} = {...productBarProps};
    const lang = useSelector(langSelector);
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [toolTipVisible, setToolTipVisible] = useState<boolean>(false);
    const criteriaIcons = new Map([
        ["rating", <PointOfSaleIcon/>],
        ["sold", <SellIcon/>]
    ]);

    return (
        <MenuItem>
            <Stack
                spacing={5}
                direction={"row"}
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 8vw)",
                    textAlign: "left"
                }}
            >
                <Typography variant={"subtitle1"}>
                    {languages.get(lang)!.widgets.products.menuBar.product}
                </Typography>
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
                    <IconButton
                        ref={anchorRef}
                        onClick={toggleSortCriteriaHandler}
                        onMouseEnter={() => setToolTipVisible(true)}
                        onMouseLeave={() => setToolTipVisible(false)}
                    >
                        {criteriaIcons.get(sortCriteria)}
                    </IconButton>
                    <Popper
                        open={toolTipVisible}
                        anchorEl={anchorRef.current}
                        transition
                        disablePortal
                    >
                        {({TransitionProps}) => (
                            <Grow
                                {...TransitionProps}
                            >
                                <Paper>
                                    {`Sort by ${sortCriteria === "rating" ? "average rating" : "Items sold"}`}
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Paper>
            </Stack>
        </MenuItem>
    );
};

export default ProductListBar;
