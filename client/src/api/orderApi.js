import axios from "axios";

const baseUrl ="http://localhost:3000/api";

export const orderBooksApi = (orders) => {
    return new Promise(async (resolve, reject) => {
    try {
      console.log(orders)
        const {data} = await axios.post(`${baseUrl}/user/orders`, {orders}, {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        });
        if (data.error === false) {
            resolve(data);
        }
    } catch (error) {
        reject(error.response.data);
    }
    });
};

