"use client";
import React, { useState } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface Props {
  text: string;
  icon: React.ReactNode;
  menuItems?: string[];
}

const NavButtonComponent = ({ text, icon, menuItems }: Props) => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);

  return (
    <>
      <Button
        sx={{ color: "white", textTransform: "none" }}
        startIcon={icon}
        onClick={(e) => setAnchor(e.currentTarget)}
      >
        {text}
      </Button>
      {menuItems && (
        <Menu open={open} onClose={() => setAnchor(null)} anchorEl={anchor}>
          {menuItems.map((item) => (
            <MenuItem key={item} onClick={() => setAnchor(null)}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default NavButtonComponent;
