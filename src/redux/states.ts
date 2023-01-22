export type IAuthState = {
    authenticated: true,
    who: string
} | {
    authenticated: false
};