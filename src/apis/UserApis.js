import axiosClient from "./AxiosClient";

const url = "https://monacolor.herokuapp.com/api/v1/users";

export const UserApis = {
  login: (user) => {
    return axiosClient.post(`${url}/login`, user);
  },
  getUserInfo: async () => {
    return await axiosClient.put(`${url}/updateMe`);
  },
  getOrderOfUser: (id, params) => {
    return axiosClient.get(`${url}/${id}/orders`, { params });
  },
};
