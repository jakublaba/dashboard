import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { authenticate } from "../auth/auth";
import { useDispatch } from "react-redux";
import IAction from "../types/auth-action.type";

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const handleSubmit = () => {
        const action: IAction = authenticate(username, password)
            ? { type: { username: username } }
            : { type: "logout" };
        dispatch(action);
    };

    return (
        <Container>
            <Box component={"form"} onSubmit={handleSubmit}>
                <TextField placeholder="Username" />
                <TextField
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password"
                />
                <Button type="submit" />
            </Box>
        </Container>
    );
};

export default Login;
