import axiosClient from "./AxiosClient";

const url = "https://monacolor.herokuapp.com/api/v1/users";

export const UserApis = {
  login: (user) => {
    return axiosClient.post(`${url}/login`, user);
  },
  getUserInfo: () => {
    return axiosClient.put(`${url}/updateMe`);
  },
};
