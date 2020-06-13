import { SERVER_BASE_PATH } from "./config";

export function postImg(img) {
  return new Promise((resolve, reject) => {
    fetch(`${SERVER_BASE_PATH}/api/face`, {
      method: "POST",
      headers: { accept: "application/json" },
      body: JSON.stringify({ b64_img: img }),
    })
      .then((response) => {
        if (!response.ok) throw Error("failed to fetch");
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}
