import IAuthState from "../types/auth.type";
import IAction from "../types/auth-action.type";

const unauthenticated: IAuthState = {
    isLoggedIn: false,
    who: undefined,
};

const rootReducer = (
    state: IAuthState | undefined,
    action: IAction
): IAuthState => {
    switch (action.type) {
        case "logout":
        case undefined:
            return unauthenticated;
        default:
            return {
                isLoggedIn: true,
                who: action.type.username,
            };
    }
};

export default rootReducer;
