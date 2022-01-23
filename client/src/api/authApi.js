import axios from "axios";

const baseUrl ="http://localhost:3000/api";

export const userLogin = (userInfo) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.post(`${baseUrl}/auth/login`, userInfo);
        if(data.error === false){
            resolve(data);
        }
      } catch (error) {
        reject(error.response.data);
      }
    });
};

export const userRegister = (userInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(`${baseUrl}/auth/register`, userInfo);
      if(data.error === false){
          resolve(data);
      }
    } catch (error) {
      reject(error.response.data);
    }
  });
};