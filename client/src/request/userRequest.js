import axios from "axios";

export const fetchUser = async (obj) => {
  const { data } = await axios.get(`/users/${obj.queryKey[1]}`);
  return data;
};

export const updateProfile = async (obj) => {
  const { data } = await axios.put(`/users/update`, {
    userId: obj.userId,
    description: obj.description,
  });
  return data;
};
