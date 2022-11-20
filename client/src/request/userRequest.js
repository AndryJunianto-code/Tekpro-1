import axios from "axios";

export const fetchUser = async (obj) => {
  const { data } = await axios.get(`/users/${obj.queryKey[1]}`);
  return data;
};
