export function setLoginUser(user: string) {
    return {
        type: "LOGIN",
        payload: {
            user,
        },
    };
}
export function quitLoginUser() {
    return {
        type: "QUIT",
        payload: {}
    }
}
export function addLoginUser() {
    return {
        type: "ADD",
        payload: {
            x: '123'
        }
    }
}
