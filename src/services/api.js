import axios from "axios";

axios.defaults.baseURL = "https://64787a93362560649a2ddd8a.mockapi.io/";

export const getAllUsers = async () => {
  const { data } = await axios.get("users");

  return data;
};

export const updateUser = async (user) => {
  await axios.put(`users/${user.id}`, user);
};

export const getUsers = async (page, limit) => {
  const params = `users?page=${page}&limit=${limit}`;
  const { data } = await axios.get(params);

  return data;
};
