import axios from "axios";

export const createNewBookmarkList = async (obj) => {
  const { data } = await axios.post("/bookmarkLists", {
    name: obj.name,
    userId: obj.userId,
  });

  return data;
};

export const fetchAllLists = async (obj) => {
  const { data } = await axios.get(`/bookmarkLists/${obj.queryKey[1]}`);
  return data;
};

export const fetchOneList = async (obj) => {
  console.log(obj.queryKey[1]);
  const { data } = await axios.get(`/bookmarkLists/b/${obj.queryKey[1]}`);
  return data;
};

export const addPostToBookmark = async (obj) => {
  const { data } = await axios.put(`/bookmarkLists/${obj.bookmarkId}`, {
    post: obj.post,
    postId: obj.post._id,
  });
  return data;
};

export const removePostToBookmark = async (obj) => {
  const { data } = await axios.put(`/bookmarkLists/remove/${obj.bookmarkId}`, {
    postId: obj.postId,
  });
  return data;
};
