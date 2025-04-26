"use client";
import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Props {
  Icon: React.ElementType;
  label: string;
  type: string;
  placeholder?: string;
}

const IconInput = ({ Icon, label, type, placeholder }: Props) => {
  const [focused, setFocused] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        marginBottom: 2,
      }}
    >
      <Icon
        sx={{ color: focused ? "#1769aa" : "action.active", mr: 1, my: 0.5 }}
      />
      <TextField
        placeholder={placeholder}
        fullWidth
        label={label}
        type={type}
        variant="standard"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </Box>
  );
};

export default IconInput;
