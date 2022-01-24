import axios from "axios";

const baseUrl ="http://localhost:3000/api";

export const postNewBook = (formData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const {data} = await axios.post(`${baseUrl}/book/new`, formData, {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        });

  
        resolve(data);
      } catch (error) {
        reject(error.response.data);
      }
    });
};

export const getAllBooks = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${baseUrl}/book/all`);
      console.log(data)

      resolve(data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export const getCBooks = (category) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${baseUrl}/book/filter/${category}`);
      console.log(data)

      resolve(data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};