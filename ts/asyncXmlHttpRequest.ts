/*
    create code that convert xhr to promise
        type generic
        get query params - take object and convert it to query params
            http://localhost:3030/index?key1=val1&key2=val2
    axhr.get(url, {
        headers,
        qparams:{
            key1:val1,
            key2:val2
        }
    })
        convert to and from json
    test with rick and morty api
    header = contentType: "application/json",
*/
interface IConfig {
  headers?: object;
  qparams?: object;
}

class Axhr {
  static get<T>(url: string, config?: IConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      const reqListener = (): void => {
        resolve(JSON.parse(req.responseText));
      };
      const transferFailed = (e: any): void => {
        if (req.status === 0) {
          reject(new Error("cors error"));
        } else {
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
      //   req.setRequestHeader()
      req.send();
    });
  }
}

const sendRequest = async (): Promise<void> => {
  try {
    let response = await Axhr.get<string>("https://rickandmortyapi.com/api");
    console.log("response", response);
  } catch (err) {
    console.log("err", err);
  }
};
sendRequest();
