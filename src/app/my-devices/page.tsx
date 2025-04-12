import Link from "next/link";
import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";

const placeholders = [
  "p1",
  "p2",
  "p3",
  "p4",
  "p5",
  "p6",
  "p7",
  "p8",
  "p9",
  "p10",
];

const MyDevices = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3">Welcome back user</Typography>
      <Typography variant="h4" sx={{ marginTop: 1, marginBottom: 2 }}>
        My devices
      </Typography>
      <Link href="/my-devices/add-device">
        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          endIcon={<AddIcon />}
        >
          Add Device
        </Button>
      </Link>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ marginTop: 4 }}
      >
        {placeholders.map((placeholder) => (
          <Grid
            size={{ xs: 2, sm: 4, md: 4 }}
            sx={{ border: 1 }}
            key={placeholder}
          >
            placeholder
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyDevices;
