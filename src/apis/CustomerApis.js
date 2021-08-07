import axiosClient from "./AxiosClient";

const url = "https://monacolor.herokuapp.com/api/v1/customers";

export const CustomerssApis = {
  getAll: (params) => {
    return axiosClient.get(url, { params });
  },
  insert: (data) => {
    return axiosClient.post(`${url}`, data);
  },
  update: (id, data) => {
    return axiosClient.put(`${url}/${id}`, data);
  },
};
