import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  CardMedia,
} from "@mui/material";

const IndividualList = () => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: "1.6rem",
      }}
    >
      <CardContent sx={{ paddingY: "1.1rem", paddingX: "1.5rem" }}>
        <Typography fontWeight={900} fontSize={"1.2rem"} mb={"3rem"}>
          Reading List
        </Typography>
        <Stack direction="row" display={"flex"} alignItems="center">
          <Button
            variant="outlined"
            sx={{ borderRadius: "8px", marginRight: "1rem" }}
          >
            View list
          </Button>
          <Typography variant="caption">2 stories</Typography>
        </Stack>
      </CardContent>
      <CardMedia
        component="img"
        sx={{
          width: 183,
          height: 183,
          display: { xs: "none", md: "block" },
        }}
        image="https://images.pexels.com/photos/10772482/pexels-photo-10772482.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        alt="Image"
      />
    </Card>
  );
};

export default IndividualList;
