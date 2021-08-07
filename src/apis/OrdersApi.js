import axiosClient from "./AxiosClient";

const url = "https://monacolor.herokuapp.com/api/v1/orders";
const OrdersApis = {
  createOrder: (order) => {
    return axiosClient.post(url, order);
  },
};

export default OrdersApis;
