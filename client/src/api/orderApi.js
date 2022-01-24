import axios from "axios";

const baseUrl ="http://localhost:3000/api";

export const orderBooksApi = (orders, totalPrice) => {
    return new Promise(async (resolve, reject) => {
    try {
      console.log(orders)
        const {data} = await axios.post(`${baseUrl}/user/orders`, {orders, totalPrice}, {
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

