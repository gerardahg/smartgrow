'use client';

import React, { useState } from 'react';

import { useTranslations } from 'next-intl';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface SettingsButtonProps {
  reference: string;
  name: string;
  onNameUpdate: (newName: string) => void;
  onDeviceDelete: () => void;
}

const SettingsButton = ({
  reference,
  name,
  onNameUpdate,
  onDeviceDelete,
}: SettingsButtonProps) => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [newName, setNewName] = useState(name);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const open = Boolean(anchor);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const openEditDialog = () => {
    setNewName(name);
    setIsEditDialogOpen(true);
    handleClose();
  };

  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
    setError(null);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleSaveEdit = async () => {
    if (!newName.trim()) {
      setError('Name cannot be empty');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/devices/${reference}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName }),
      });

      if (!response.ok) {
        throw new Error(`Error updating device: ${response.statusText}`);
      }

      onNameUpdate(newName);
      closeEditDialog();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unknown error occurred'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const openDeleteDialog = () => {
    setIsDeleteDialogOpen(true);
    handleClose();
  };

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setError(null);
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/devices/${reference}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Error deleting device: ${response.statusText}`);
      }

      onDeviceDelete();
      closeDeleteDialog();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unknown error occurred'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const t = useTranslations();
  return (
    <>
      <IconButton
        size="small"
        sx={{ position: 'absolute', top: 8, right: 8 }}
        onClick={handleClick}
      >
        <SettingsIcon />
      </IconButton>

      <Menu open={open} onClose={handleClose} anchorEl={anchor}>
        <MenuItem onClick={openEditDialog}>{t('edit')}</MenuItem>
        <MenuItem onClick={openDeleteDialog}>{t('delete')}</MenuItem>
      </Menu>

      <Dialog open={isEditDialogOpen} onClose={closeEditDialog}>
        <DialogTitle>{t('editDevice')}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label={t('deviceName')}
            type="text"
            fullWidth
            value={newName}
            onChange={handleNameChange}
            error={!!error}
            helperText={error}
            disabled={isLoading}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEditDialog} disabled={isLoading}>
            {t('cancel')}
          </Button>
          <Button onClick={handleSaveEdit} color="primary" loading={isLoading}>
            {t('save')}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isDeleteDialogOpen} onClose={closeDeleteDialog}>
        <DialogTitle>{t('deleteDevice')}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t('confirmDelete1')} {name}
            {t('confirmDelete2')}
          </DialogContentText>
          {error && (
            <DialogContentText color="error" sx={{ mt: 2 }}>
              {error}
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog} disabled={isLoading}>
            {t('cancel')}
          </Button>
          <Button onClick={handleDelete} color="error" loading={isLoading}>
            {t('delete')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SettingsButton;
