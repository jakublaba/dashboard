import React from "react";
import {Avatar, Card, CardContent, CardHeader, Stack} from "@mui/material";
import Rating from "@mui/material/Rating";

const CommentCard: React.FC<{ rating: number }> = ({rating}) => {
    return (
        <Card>
            <CardHeader
                avatar={<Avatar/>}
                title={
                    <Stack direction={"row"}>
                        {"Lorem"}
                        <Rating
                            value={rating}
                            readOnly
                        />
                    </Stack>
                }
                subheader={"ipsum@dolor.sit"}
            />
            <CardContent>
                Lorem ipsum dolor sit amet
            </CardContent>
        </Card>
    );
};

export default CommentCard;
