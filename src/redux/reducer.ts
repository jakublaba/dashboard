import {IAuthState} from "./states";
import {IAction} from "./actions";

const rootReducer = (
    state: IAuthState | undefined,
    action: IAction
): IAuthState => {
    switch (action.type) {
        case "logout":
            return {
                authenticated: false
            };
        case "login":
            return {
                authenticated: true,
                who: action.username,
            };
        default:
            return {
                authenticated: false
            };
    }
};

export default rootReducer;
