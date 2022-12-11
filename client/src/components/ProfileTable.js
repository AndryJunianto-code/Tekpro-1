import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { fetchPostByAuthor } from "../request/postRequest";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Typography } from "@mui/material";

const columns = [
  {
    field: "title",
    headerName: "Posts",
    width: 400,
  },
  {
    field: "numOfView",
    headerName: "Views",
    width: 80,
  },
  {
    field: "numOfLike",
    headerName: "Likes",
    width: 80,
  },
  {
    field: "numOfComment",
    headerName: "Comments",
    width: 110,
  },
];

export default function DataGridDemo({ postData, postSuccess }) {
  const [modifyPostData, setModifyPostData] = useState([]);

  useEffect(() => {
    let temp = [];
    postSuccess &&
      postData.map((p) => {
        const { numOfView, _id, title, numOfLike, numOfComment } = p;
        const newObj = {
          numOfView,
          id: _id,
          title,
          numOfLike,
          numOfComment,
        };
        temp.push(newObj);
      });
    setModifyPostData(temp);
  }, [postData]);
  return (
    <Box sx={{ height: "400px", width: "100%" }}>
      {postSuccess && postData ? (
        <DataGrid
          rows={modifyPostData}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
        />
      ) : (
        <Typography>Retrieving ...</Typography>
      )}
    </Box>
  );
}
