import db from "../models";

export const register = () =>
  new Promise((resolve, reject) => {
    try {
      resolve("register service");
      console.log("After resolve");
    } catch (error) {
      reject(error);
    }
  });
