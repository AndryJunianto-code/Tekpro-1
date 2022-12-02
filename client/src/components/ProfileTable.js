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
];

export default function DataGridDemo({ postData, postSuccess }) {
  const { user } = useAuth0();
  const [modifyPostData, setModifyPostData] = useState([]);

  useEffect(() => {
    let temp = [];
    postSuccess &&
      postData.map((p) => {
        const { numOfView, _id, title, numOfLike } = p;
        const newObj = {
          numOfView,
          id: _id,
          title,
          numOfLike,
        };
        temp.push(newObj);
      });
    setModifyPostData(temp);
  }, [postData]);
  useEffect(() => {
    console.log(modifyPostData);
  }, [modifyPostData]);
  return (
    <Box sx={{ height: "400px", width: "100%" }}>
      {postSuccess && postData ? (
        <DataGrid
          rows={modifyPostData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      ) : (
        <Typography>Retrieving ...</Typography>
      )}
    </Box>
  );
}
