import React from "react";
import recommendedTopics from "../data/RecommendedTopics";
import { Typography, Grid, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const RightbarTopicSection = () => {
  const theme = useTheme();
  return (
    <>
      <Typography
        color={theme.palette.mainWhite}
        variant="h6"
        fontSize={"0.8rem"}
        mb="0.6rem"
      >
        Recommended Topics
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={2}
        width={{ lg: "70%", xl: "65%" }}
        alignItems="center"
      >
        {recommendedTopics.map((r) => (
          <Grid item lg={6} key={r.id}>
            <Link to={`/tag/${r.tagName}`} className="link">
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  fontSize: "0.75rem",
                  width: "100%",
                }}
              >
                {r.tagName}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RightbarTopicSection;
