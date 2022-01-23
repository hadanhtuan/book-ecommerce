import axios from "axios";

const baseUrl = 'http://localhost:3000/api';

export const fetchUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const accessToken = localStorage.getItem("accessToken");
  
        if (!accessToken) {
          reject({error: true ,message: "Token not found!"});
        }
  
        const { data } = await axios.get(`${baseUrl}/user`, {
          headers: {
            Authorization: accessToken,
          },
        });
  
        resolve(data);
      } catch (error) {
        reject(error.response.data);
      }
    });
};