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

export const publishImage = async (obj) => {
  const { data } = await axios.post("/posts/image", obj.formdata);

  return data;
};

export const publishPost = async (obj) => {
  const { data } = await axios.post("/posts", {
    title: obj.title,
    subtitle: obj.subtitle,
    authorName: obj.authorName,
    authorImage: obj.authorImage,
    authorId: obj.authorId,
    postImage: obj.postImage,
    caption: obj.caption,
  });
  return data;
};

export const likedPost = async (obj) => {
  const action = obj.action;
  const { data } = await axios.put(`/posts/like/?action=${action}`, {
    postId: obj.postId,
    userId: obj.userId,
    action,
  });
  return data;
};

export const bookmarkedPost = async (obj) => {
  const action = obj.action;
  const { data } = await axios.put(`/posts/bookmark/?action=${action}`, {
    postId: obj.postId,
    userId: obj.userId,
    action,
  });
  return data;
};
