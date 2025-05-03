'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { signOut } from 'next-auth/react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface Props {
  text: string;
  icon: React.ReactNode;
  menuItems?: { display: string; href?: string }[];
}

const NavButtonComponent = ({ text, icon, menuItems }: Props) => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <>
      <Button
        sx={{ color: 'white', textTransform: 'none' }}
        startIcon={icon}
        onClick={(e) => setAnchor(e.currentTarget)}
      >
        {text}
      </Button>
      {menuItems && (
        <Menu open={open} onClose={() => setAnchor(null)} anchorEl={anchor}>
          {menuItems.map((item) => (
            <Link href={item.href ? item.href : '#'} key={item.display}>
              <MenuItem
                onClick={() => {
                  setAnchor(null);
                  item.display === 'Logout' && handleLogout();
                }}
              >
                {item.display}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      )}
    </>
  );
};

export default NavButtonComponent;
