import React from "react";

import Button from "@mui/material/Button";

interface Props {
  text: string;
  icon: React.ReactNode;
}

const NavButtonComponent = ({ text, icon }: Props) => {
  return (
    <Button sx={{ color: "white", textTransform: "none" }} startIcon={icon}>
      {text}
    </Button>
  );
};

export default NavButtonComponent;
