import axiosClient from "./AxiosClient";

const url = "https://monacolor.herokuapp.com/api/v1/products";

export const ProductApis = {
  getAll: (params) => {
    return axiosClient.get(url, { params });
  },

  get: async (id) => {
    return await axiosClient.get(`${url}/${id}`);
  },

  getTypes: async () => {
    return await axiosClient.get(`${url}/types`);
  },
};
