import axios from "axios";

export const fetchUser = async (obj) => {
  const { data } = await axios.get(`/users/${obj.queryKey[1]}`);
  return data;
};

export const fetchUserByUsername = async (obj) => {
  const { data } = await axios.get(`/users/search/${obj.queryKey[1]}`);
  return data;
};

export const updateProfile = async (obj) => {
  const { data } = await axios.put(`/users/update`, {
    userId: obj.userId,
    description: obj.description,
  });
  return data;
};

export const followUser = async (obj) => {
  const { data } = await axios.put(`/users/follow`, {
    userId: obj.userId,
    authorId: obj.authorId,
    authorUsername: obj.authorUsername,
    authorPicture: obj.authorPicture,
  });
  return data;
};

export const unfollowUser = async (obj) => {
  const { data } = await axios.put(`/users/unfollow`, {
    userId: obj.userId,
    authorId: obj.authorId,
    authorUsername: obj.authorUsername,
    authorPicture: obj.authorPicture,
  });
  return data;
};
