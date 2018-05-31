export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export default {
    login(token) {
        return {
            type: AUTH_LOGIN,
            token
        };
    },

    logout() {
        return {
            type: AUTH_LOGOUT
        };
    }
};
