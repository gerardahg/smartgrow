import Typography from "@mui/material/Typography";
import React from "react";

const MyTypography = (props: { text: string }) => {
  return <Typography variant="body1">{props.text}</Typography>;
};

export default MyTypography;
