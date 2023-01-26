import React from "react";
import {Box, Stack} from "@mui/material";
import SalesChart from "./SalesChart";
import ProductList from "./widgets/products/ProductList";
import CommentList from "./widgets/feedback/CommentList";

const Home: React.FC = () => {
    return (
        <Box>
            <Stack
                spacing={1}
                direction={"row"}
            >
                <ProductList/>
                <SalesChart/>
            </Stack>
            <CommentList/>
        </Box>
    );
};

export default Home;
