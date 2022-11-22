import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  addPostToBookmark,
  fetchAllLists,
  removePostToBookmark,
} from "../request/bookmarkListRequest";
import { useQuery, useMutation } from "react-query";

export default function BookmarkModal({ checked, setChecked, post }) {
  const { user } = useAuth0();

  const { data: listsData, isSuccess: listsSuccess } = useQuery(
    ["fetchAllLists", user?.sub],
    fetchAllLists,
    {
      retryDelay: 3000,
    }
  );
  const { mutate: mutateRemovePostToBookmark } =
    useMutation(removePostToBookmark);
  const { mutate: mutateAddPostToBookmark } = useMutation(addPostToBookmark, {
    /* onSuccess: (data) => console.log(data), */
  });

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      mutateAddPostToBookmark(
        {
          bookmarkId: value,
          post: post,
        },
        {
          onSuccess: (data) => console.log(data),
        }
      );
      newChecked.push(value);
    } else {
      mutateRemovePostToBookmark(
        {
          bookmarkId: newChecked[currentIndex],
          postId: post._id,
        },
        {
          onSuccess: (data) => console.log(data),
        }
      );
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {listsSuccess &&
        listsData?.map((list) => {
          const labelId = `checkbox-list-secondary-label-${list._id}`;
          return (
            <ListItem
              key={list._id}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(list._id)}
                  checked={checked.indexOf(list._id) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                  size="small"
                />
              }
              disablePadding
            >
              <ListItemButton>
                <Typography sx={{ fontSize: "0.8rem" }}>{list.name}</Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
}
