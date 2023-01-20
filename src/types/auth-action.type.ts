export default interface IAction {
    type: ILogin | "logout" | undefined;
}

export interface ILogin {
    username: string;
}
