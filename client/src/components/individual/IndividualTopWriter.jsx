import { Avatar, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const IndividualTopWriter = ({ t }) => {
  return (
    <Stack direction="row" alignItems="center" mb="1rem" key={t.userId}>
      <Avatar
        src={t.picture}
        alt="image"
        sx={{ width: "45px", height: "45px" }}
      />
      <Stack ml="1rem" width="50%">
        <Typography fontSize="0.8rem" fontWeight="600">
          {t.username}
        </Typography>
        <Typography
          className="topWriterDesc"
          fontSize="0.7rem"
          fontWeight="300"
          lineHeight="16px"
        >
          {t.description}
        </Typography>
      </Stack>
      <Link to={`/profile/${t.userId}`} className="link">
        <Button
          ml="1rem"
          variant="outlined"
          sx={{ textTransform: "capitalize", fontSize: "0.7rem" }}
        >
          View
        </Button>
      </Link>
    </Stack>
  );
};

export default IndividualTopWriter;
