import React from "react";
import {Paper, Stack} from "@mui/material";
import CommentCard from "./CommentCard";

const randomRating = () => Math.floor(Math.random() * 4) + 1;

const CommentList: React.FC = () => {
    return (
        <Paper elevation={0}>
            <Stack spacing={3}>
                {Array.from(Array(2).keys()).map(() => (
                    <Stack
                        direction={"row"}
                        spacing={3}
                    >
                        {Array.from(Array(4).keys()).map(() => (
                            <CommentCard rating={randomRating()}/>
                        ))}
                    </Stack>
                ))}
            </Stack>
        </Paper>
    );
};

export default CommentList;
