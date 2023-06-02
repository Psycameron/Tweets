import axios from "axios";

axios.defaults.baseURL = "https://64787a93362560649a2ddd8a.mockapi.io";

export const getAllUsers = async () => {
  const { data } = await axios.get("/users");

  return data;
};

export const updateUser = async (user) => {
  console.log(`🚀 ~ updateUser ~ user:`, user);
  await axios.put(`/users/${user.id}`, user);
};
