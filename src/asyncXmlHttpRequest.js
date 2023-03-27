"use strict";
class Axhr {
    static get(url, config) {
        return new Promise((resolve, reject) => {
            const reqListener = () => {
                resolve(JSON.parse(req.responseText));
            };
            const transferFailed = (e) => {
                if (req.status === 0) {
                    reject(new Error("cors error"));
                }
                else {
                    reject(e);
                }
            };
            const req = new XMLHttpRequest();
            req.addEventListener("load", reqListener);
            req.addEventListener("error", transferFailed);
            req.open("GET", url);
            req.setRequestHeader("Content-Type", "application/json");
            if (config) {
                if (config.headers) {
                    for (let [key, val] of Object.entries(config?.headers)) {
                        req.setRequestHeader(key, val);
                    }
                }
                if (config.qparams) {
                    let qparams = "?";
                    for (let [key, val] of Object.entries(config?.qparams)) {
                        qparams += `${key}=${val}&`;
                    }
                    qparams = qparams.slice(0, -1);
                    url += qparams;
                }
            }
            req.send();
        });
    }
}
const sendRequest = async () => {
    try {
        let response = await Axhr.get("https://rickandmortyapi.com/api");
        console.log("response", response);
    }
    catch (err) {
        console.log("err", err);
    }
};
sendRequest();
