import axios from "axios";

export const fetchAllPost = async () => {
  const { data } = await axios.get("/posts");
  return data;
};

export const fetchSinglePost = async (obj) => {
  const postId = obj.queryKey[1];
  const { data } = await axios.get(`/posts/${postId}`);
  return data;
};
