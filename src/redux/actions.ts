export type  IAction = {
    type: "login",
    username: string
} | {
    type: "logout"
} | {
    type: undefined
};
