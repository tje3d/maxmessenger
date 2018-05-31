import { AUTH_LOGIN, AUTH_LOGOUT } from "@actions/auth";

export const StateAuth = {
    token: null
};

export default function Reducer(state = StateAuth, action) {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                token: action.token
            };
        case AUTH_LOGOUT:
            return {
                ...state,
                token: null
            };
        default:
            return state;
    }
}
