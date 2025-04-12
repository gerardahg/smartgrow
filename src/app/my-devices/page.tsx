import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";

const placeholders = ["p1", "p2", "p3", "p4", "p5", "p6", "p7"];

const page = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3">Welcome back user</Typography>
      <Typography variant="h4" sx={{ marginTop: 1, marginBottom: 2 }}>
        My devices
      </Typography>
      <Button variant="contained">Add Device</Button>
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        {placeholders.map((placeholder) => (
          <Grid size={4} sx={{ border: 1 }} key={placeholder}>
            placeholder
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default page;
