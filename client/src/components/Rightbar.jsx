import { Box, Typography, Grid, Button } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      sx={{
        display: { xs: "none", lg: "block" },
      }}
      p={2}
    >
      <Box position="fixed">
        <Typography variant="h6" fontSize={"0.8rem"}>
          Recommended Topics
        </Typography>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={1}
          width={{ lg: "70%", xl: "65%" }}
        >
          <Grid item lg={6}>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", fontSize: "0.75rem" }}
            >
              Data Science
            </Button>
          </Grid>
          <Grid item lg={6}>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", fontSize: "0.75rem" }}
            >
              Data Science
            </Button>
          </Grid>

          <Grid item lg={6}>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", fontSize: "0.75rem" }}
            >
              Data Science
            </Button>
          </Grid>
          <Grid item lg={6}>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", fontSize: "0.75rem" }}
            >
              Data Science
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Rightbar;
