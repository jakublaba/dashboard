import React, {useState} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {authenticate} from "../auth/auth";
import {useDispatch} from "react-redux";
import {IAction} from "../redux/actions";

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const handleSubmit = () => {
        const action: IAction = authenticate(username, password)
            ? {
                type: "login",
                username: username
            } : {
                type: "logout"
            };
        dispatch(action);
    };

    return (
        <Container>
            <Box component={"form"}>
                <TextField
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    type={"input"}
                />
            </Box>
            <Box>
                <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type={passwordVisible ? "text" : "password"}
                />
            </Box>
            <Button onClick={handleSubmit}>
                Login
            </Button>
            <Button onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? "Hide password" : "Show password"}
            </Button>
        </Container>
    );
};

export default Login;
