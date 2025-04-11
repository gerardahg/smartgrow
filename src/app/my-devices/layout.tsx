import React, { ReactNode } from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ gap: 1 }}>
          <IconButton sx={{ gap: 0.5, color: "white", borderRadius: 3 }}>
            <AccountCircleIcon />
            <Typography variant="body2">My account</Typography>
          </IconButton>
          <Link href="/my-devices">
            <IconButton
              sx={{
                gap: 0.5,
                color: "white",
                borderRadius: 3,
              }}
            >
              <HomeIcon />
              <Typography variant="body2">Home</Typography>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Box>{children}</Box>
    </Box>
  );
};

export default layout;
