import {Context, createContext} from "react";

export const ctxAuth: Context<any> = createContext({} as Context<any>);

const users: Map<string, string> = new Map([
    ["user", "password"],
    ["admin", "admin"]
]);

export const authenticate = (username: string, password: string): boolean => {
    return users.get(username) === password;
};
