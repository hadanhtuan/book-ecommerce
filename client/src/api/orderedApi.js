import axios from "axios";

const baseUrl ="http://localhost:3000/api";

export const orderedBooksApi = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${baseUrl}/user/orders`,{
          headers: {
            authorization: localStorage.getItem("accessToken"),
          },
        });
        console.log(data)
      
      resolve(data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};