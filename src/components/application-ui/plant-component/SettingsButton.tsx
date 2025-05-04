'use client';

import React, { useState } from 'react';
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
import CircularProgress from '@mui/material/CircularProgress';

interface SettingsButtonProps {
  id: number;
  name: string;
  onNameUpdate: (newName: string) => void;
  onDeviceDelete: () => void;
}

const SettingsButton = ({
  id,
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
      const response = await fetch(`http://localhost:3000/api/devices/${id}`, {
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

  // Delete functions
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
      const response = await fetch(`http://localhost:3000/api/devices/${id}`, {
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
        <MenuItem onClick={openEditDialog}>Edit</MenuItem>
        <MenuItem onClick={openDeleteDialog}>Delete</MenuItem>
      </Menu>

      <Dialog open={isEditDialogOpen} onClose={closeEditDialog}>
        <DialogTitle>Edit Device</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Device Name"
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
            Cancel
          </Button>
          <Button
            onClick={handleSaveEdit}
            color="primary"
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={20} /> : null}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isDeleteDialogOpen} onClose={closeDeleteDialog}>
        <DialogTitle>Delete Device</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {name}? This action cannot be
            undone.
          </DialogContentText>
          {error && (
            <DialogContentText color="error" sx={{ mt: 2 }}>
              {error}
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog} disabled={isLoading}>
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            color="error"
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={20} /> : null}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SettingsButton;
