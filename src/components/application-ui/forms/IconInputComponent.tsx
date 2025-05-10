'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface Props {
  Icon: React.ElementType;
  label: string;
  type: string;
  placeholder?: string;
  dispatchType?: string;
}

const IconInput = ({ Icon, label, type, placeholder, dispatchType }: Props) => {
  const dispatch = useDispatch();

  const [focused, setFocused] = useState(false);
  const [localText, setLocalText] = useState('');

  //Hacer un dispatch por cada letra escrita causa mucho lag, mejor es mantener una variable local y cuando cambie su valor actualizamos la de redux
  //Hacemos un timeout de 300ms, cuando se cumple ese tiempo ejecuta el dispatch, si se vuelve a cambiar el valor en menos de 300ms se reinicia el tiempo del timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (dispatchType) dispatch({ type: dispatchType, payload: localText });
    }, 300);

    return () => clearTimeout(timeout);
  }, [localText]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: 2,
      }}
    >
      <Icon
        sx={{ color: focused ? '#1769aa' : 'action.active', mr: 1, my: 0.5 }}
      />
      <TextField
        placeholder={placeholder}
        fullWidth
        label={label}
        type={type}
        variant="standard"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={localText}
        onChange={(e) => setLocalText(e.target.value)}
      />
    </Box>
  );
};

export default IconInput;
