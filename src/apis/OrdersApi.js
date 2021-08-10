import axiosClient from "./AxiosClient";

const url = "https://monacolor.herokuapp.com/api/v1/orders";
const OrdersApis = {
  createOrder: (order) => {
    return axiosClient.post(url, order);
  },
  getOrder: (id) => {
    return axiosClient.get(`${url}/${id}`);
  },
  delteOrder: (id) => {
    return axiosClient.delete(`${url}/${id}`);
  },
};

export default OrdersApis;
