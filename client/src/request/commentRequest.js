import axios from "axios";

export const createNewComment = async (obj) => {
  const { data } = await axios.post("/comments", {
    username: obj.username,
    image: obj.image,
    comment: obj.comment,
    postId: obj.postId,
    userId: obj.userId,
  });

  return data;
};

export const fetchComments = async (obj) => {
  const { data } = await axios.get(`/comments/${obj.queryKey[1]}`);
  return data;
};
