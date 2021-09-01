import axios from "axios";

const apiURL = "http://localhost:3300/api/products";

const ajax = axios.create();

export const getProducts = () => {
    return ajax
      .get(apiURL + "/")
      .then(res => {
        return res.data;
      })
      .catch(error => {
        console.log(error);
      });
  };

  export const addProduct = (product) => {
    return ajax
      .post(apiURL + "/", product)
      .then(res => {
        console.log(res)
        return res.data;
      })
      .catch(error => {
        console.log(error);
      });
  };