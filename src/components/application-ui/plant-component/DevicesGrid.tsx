'use client';
import React, { useCallback, useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Grow from '@mui/material/Grow';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Collapse from '@mui/material/Collapse';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Stack from '@mui/material/Stack';
import ClearIcon from '@mui/icons-material/Clear';

import SmartgrowComponent from '@/components/application-ui/plant-component/SmartgrowComponent';
import { useDevices } from '@/hooks/useDevices';
import { Device } from '@/lib/types/device';

export default function DevicesGrid() {
  const { devices, isLoading, error, refetch } = useDevices();
  const t = useTranslations();

  //Estados de busqueda, filtros, etc.
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showFilters, setShowFilters] = useState(false);

  const handleDeviceDelete = useCallback(() => {
    //Timeout para que de opción a ver la notificación
    setTimeout(() => {
      refetch();
    }, 1000);
  }, [refetch]);

  // Logica de busqueda y filtro
  const filteredDevices = useMemo(() => {
    if (!devices) return [];

    const filtered = devices.filter((device: Device) => {
      return (
        device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        device.reference.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    // Ordenar alfabeticamente
    filtered.sort((a, b) => {
      const comparison = a.name
        .toLowerCase()
        .localeCompare(b.name.toLowerCase());
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [devices, searchTerm, sortOrder]);

  const clearFilters = () => {
    setSearchTerm('');
    setSortOrder('asc');
  };

  const hasActiveFilters = searchTerm !== '' || sortOrder !== 'asc';

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography
        variant="body1"
        color="error"
        sx={{ textAlign: 'center', my: 4 }}
      >
        Error loading devices: {error.message}
      </Typography>
    );
  }

  if (!devices || devices.length === 0) {
    return (
      <Paper elevation={1} sx={{ marginBottom: 4, p: 3 }}>
        <Typography variant="body1" sx={{ textAlign: 'center', my: 4 }}>
          {t('noDevicesFound')}
        </Typography>
      </Paper>
    );
  }

  return (
    <>
      <Paper
        elevation={1}
        sx={(theme) => ({
          p: 3,
          mb: 4,
          background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
        })}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h6">{t('myDevices')}</Typography>
            <Chip
              label={`${filteredDevices.length} ${t('of')} ${
                devices.length
              } Smartgrow${devices.length > 1 ? 's' : ''}`}
              size="small"
              sx={{ color: 'white' }}
            />
          </Stack>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              size="small"
              sx={{ color: 'white' }}
              onClick={() => setShowFilters(!showFilters)}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: 'white' }}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FilterListIcon />
            </IconButton>
            {hasActiveFilters && (
              <IconButton
                size="small"
                sx={{ color: 'white' }}
                onClick={clearFilters}
              >
                <ClearIcon />
              </IconButton>
            )}
          </Box>
        </Stack>
      </Paper>

      {/* Controles de busqueda y filtro */}
      <Collapse in={showFilters}>
        <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              placeholder={t('searchDevices')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="small"
              fullWidth
            />

            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel>{t('sortOrder')}</InputLabel>
              <Select
                value={sortOrder}
                label="Sort Order"
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <MenuItem value="asc">A-Z ({t('ascending')})</MenuItem>
                <MenuItem value="desc">Z-A ({t('descending')})</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Paper>
      </Collapse>

      <Paper elevation={1} sx={{ marginBottom: 4, p: 3 }}>
        {filteredDevices.length === 0 ? (
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}
          >
            {t('noDevicesMatchYourSearch')}
          </Typography>
        ) : (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 2, md: 4 }}
            sx={{
              justifyContent: 'center',
            }}
          >
            {filteredDevices.map((device: Device) => (
              <Grid
                key={device.reference}
                sx={{ width: '100%', maxWidth: 300 }}
              >
                <Grow in={true}>
                  <Paper
                    sx={{
                      boxShadow: 'none',
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                    }}
                  >
                    <SmartgrowComponent
                      name={device.name}
                      reference={device.reference}
                      onDeviceDelete={() => handleDeviceDelete()}
                    />
                  </Paper>
                </Grow>
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>
    </>
  );
}
