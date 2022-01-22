import axios from "axios";

const baseUrl ="http://localhost:3000/api";

export const postNewBook = (formData) => {
<<<<<<< HEAD
=======
    console.log("from api", formData);
>>>>>>> 34d51061db2b0d247de649b6aafff494ac525520

    return new Promise(async (resolve, reject) => {
      try {
        const {data} = await axios.post(`${baseUrl}/book/new`, formData, {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        });

  
        resolve(data);
      } catch (error) {
        reject(error);
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
      reject(error);
    }
  });
};