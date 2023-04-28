const URL = "http://gdrive.vasaniyakush.tech";
const get = async (path, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        URL + path + new URLSearchParams(payload).toString(),
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
        }
      );

      resolve(response.json());
    } catch (err) {
      reject(err);
    }
  });
};
const post = (path, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(URL + path, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(payload),
      });

      resolve(response.json());
    } catch (err) {
      reject(err);
    }
  });
};
export { get, post };
