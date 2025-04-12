import Image from "next/image";
import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import SettingsButton from "./SettingsButton";

interface Props {
  name: string;
}

const SmartgrowComponent = ({ name }: Props) => {
  return (
    <Box
      sx={{
        padding: 2,
        width: "100%",
        maxWidth: 300,
        position: "relative",
      }}
    >
      <Box
        sx={{
          marginBottom: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 0.5 }}>
          {name}
        </Typography>
        <Image src="/images/plant.png" width={128} height={128} alt="Plant" />
        <Button variant="contained" size="small" startIcon={<InfoIcon />}>
          Status
        </Button>
      </Box>
      <SettingsButton />
    </Box>
  );
};

export default SmartgrowComponent;
