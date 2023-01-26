import React from "react";
import {Box, Stack} from "@mui/material";
import SalesChart from "./widgets/chart/SalesChart";
import ProductList from "./widgets/products/ProductList";
import CommentList from "./widgets/comments/CommentList";

const Home: React.FC = () => {
    return (
        <Box>
            <Stack spacing={2}>
                <Stack
                    spacing={1}
                    direction={"row"}
                >
                    <ProductList/>
                    <SalesChart/>
                </Stack>
                <CommentList/>
            </Stack>
        </Box>
    );
};

export default Home;
