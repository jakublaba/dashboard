const users: Map<string, string> = new Map([
    ["user", "password"],
    ["admin", "admin"],
]);

export const authenticate = (username: string, password: string) => users.get(username) === password;
