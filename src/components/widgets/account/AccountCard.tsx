import React from "react";
import {useSelector} from "react-redux";
import {langSelector} from "../../../redux/lang/langSlice";
import {Avatar, Card, CardContent, CardHeader, Stack} from "@mui/material";
import languages from "../../../redux/lang/languages";

const AccountCard: React.FC = () => {
    const lang = useSelector(langSelector);

    return (
        <Card>
            <CardHeader
                avatar={<Avatar/>}
                title={
                    <Stack
                        direction={"row"}
                        spacing={3}
                    >
                        {languages.get(lang)!.widgets.account.username}
                    </Stack>
                }
                subheader={"user@example.com"}
            />
            <CardContent>
                <Stack
                    direction={"row"}
                    spacing={5}
                >

                </Stack>
            </CardContent>
        </Card>
    );
};

export default AccountCard;
