import axios from "axios";
import querystring from "querystring";
import { store } from "@js/reducers";

class Api {
    constructor() {
        this.baseUrl = "/";
    }

    _defaultHeaders() {
        const token = store.getState().auth.token;
        const headers = {};

        if (token) {
            headers["X-Token"] = token;
        }

        headers["User-Agent"] = "react-native";

        return headers;
    }

    _get({ apiInfo, data, name, headers }) {
        return new Promise((resolve, reject) => {
            axios({
                baseURL: this.baseUrl,
                url: apiInfo.url,
                method: "GET",
                params: data,
                responseType: "json",
                timeout: 15000,
                headers: { ...this._defaultHeaders(), ...headers }
            })
                .then(response => {
                    resolve({response});
                })
                .catch(({ response }) => {
                    reject({response});
                });
        });
    }

    _post({ apiInfo, data, name, headers }) {
        return new Promise((resolve, reject) => {
            axios({
                baseURL: this.baseUrl,
                url: apiInfo.url,
                method: "POST",
                data: querystring.stringify(data),
                responseType: "json",
                timeout: 15000,
                headers: { ...this._defaultHeaders(), "Content-Type": "application/x-www-form-urlencoded", ...headers }
            })
                .then(response => {
                    resolve({response});
                })
                .catch(({ response }) => {
                    reject({response});
                });
        });
    }
}

export default new Api();
