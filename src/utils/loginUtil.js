export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "mourad.eyes@gmail.com" && password === "123456") {
        resolve();
      } else {
        reject(new Error("something went wrong"));
      }
    }, 2000);
  });
}
