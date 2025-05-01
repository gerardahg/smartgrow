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
    <>
      <AppBar>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/my-devices">
              <NavButtonComponent text="Home" icon={<HomeIcon />} />
            </Link>
          </Box>
          <NavButtonComponent
            text="Account"
            icon={<AccountCircleIcon />}
            menuItems={[["Log out", "/"]]}
          />
          <NavButtonComponent
            text="Settings"
            icon={<SettingsIcon />}
            menuItems={[
              ["Language", ""],
              ["Theme", ""],
            ]}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box>{children}</Box>
    </>
  );
};

export default layout;
