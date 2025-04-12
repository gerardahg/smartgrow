import Link from "next/link";
import React, { ReactNode } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";

import NavButtonComponent from "@/components/NavButtonComponent";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ gap: 0.5 }}>
          <Link href="/my-devices" style={{ flexGrow: 1 }}>
            <NavButtonComponent text="Home" icon={<HomeIcon />} />
          </Link>
          <NavButtonComponent text="My Account" icon={<AccountCircleIcon />} />
          <NavButtonComponent text="Settings" icon={<SettingsIcon />} />
        </Toolbar>
      </AppBar>
      <Box>{children}</Box>
    </Box>
  );
};

export default layout;
