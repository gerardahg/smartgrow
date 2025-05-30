'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

interface Props {
  icon: React.ReactNode;
  menuItems?: { display: string; href?: string }[];
}

const NavButtonComponent = ({ icon, menuItems }: Props) => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);

  const t = useTranslations();
  return (
    <>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        {icon}
      </IconButton>
      {menuItems && (
        <Menu open={open} onClose={() => setAnchor(null)} anchorEl={anchor}>
          {menuItems.map((item) => (
            <Link href={item.href ? item.href : '#'} key={item.display}>
              <MenuItem
                onClick={() => {
                  setAnchor(null);
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
