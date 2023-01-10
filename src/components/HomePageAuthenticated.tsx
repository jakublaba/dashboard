import {NavigateFunction, useNavigate} from "react-router-dom";

export const HomePageAuthenticated = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/orders")}>Orders</button>
            <button onClick={() => navigate("/feedback")}>Customer feedback</button>
            <button onClick={() => navigate("/ranking")}>Product ranking</button>
            <button onClick={() => navigate("/chart")}>Sales chart</button>
            <button onClick={() => navigate("/account")}>My account</button>
        </div>
    );
};
