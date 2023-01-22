import {ChangeEvent, useContext, useState} from "react";
import {authenticate, ctxAuth} from "../auth/auth";
import {useLocation, useNavigate} from "react-router-dom";

export const HomePageUnauthenticated = (): JSX.Element => {
    let [username, setUsername] = useState<string>("");
    let [password, setPassword] = useState<string>("");
    let {login} = useContext(ctxAuth);
    let location = useLocation();
    let [pathTo, _] = useState<string>(location.state?.pathTo);
    let [msg, setMsg] = useState<string>(location.state?.msg);
    const navigate = useNavigate();

    const cmdLogin = (e: any) => {
        e.preventDefault();
        if (authenticate(username, password)) {
            login(username);
            navigate(pathTo ?? "/");
        } else {
            setMsg("Wrong username or password");
        }
    };

    return (
        <div>
            {msg ? <div>{msg}</div> : ""}
            <form onSubmit={cmdLogin}>
                <br/>
                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setUsername(e.target.value);
                    }}
                    value={username}
                    type="text"
                    placeholder="Username"
                />
                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    type="password"
                    placeholder="Password"
                />
                <br/>
                <button onClick={cmdLogin}>Login</button>
            </form>
            <button
                onClick={(e) => {
                    navigate(-1);
                }}
            >
                &#60;
            </button>
        </div>
    );
    // &#60 is the "<" character, acting as a dollar store arrow icon on the button
};
