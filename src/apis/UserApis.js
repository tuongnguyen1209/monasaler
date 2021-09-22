import axiosClient from "./AxiosClient";

const url = "https://monacolor.herokuapp.com/api/v1/users";

export const UserApis = {
  login: (user) => {
    return axiosClient.post(`${url}/login`, user);
  },
  getUserInfo: async () => {
    return await axiosClient.patch(`${url}/updateMe`);
  },
  updateMe: async (data) => {
    return await axiosClient.patch(`${url}/updateMe`, data);
  },
  getOrderOfUser: (id, params) => {
    return axiosClient.get(`${url}/${id}/orders`, { params });
  },
  changePass: (data) => {
    return axiosClient.post(`${url}/changePassword`, data);
  },
  forgotPassword: (email) => {
    return axiosClient.post(`${url}/forgotPassword`, email);
  },
};
