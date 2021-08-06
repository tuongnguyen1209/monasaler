import axiosClient from "./AxiosClient";

const url = "https://monacolor.herokuapp.com/api/v1/customers";

export const CustomerssApis = {
  getAll: (params) => {
    return axiosClient.get(url, { params });
  },
};
