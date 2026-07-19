import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, OutlinedInput, InputAdornment, Button, Grid2 as Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { SavedPassword } from '../types';

interface Props {
  saved: SavedPassword[];
  onDelete: (id: string) => void;
  onClearAll: () => void;
  copyToClipboard: (pwd: string) => void;
}

export default function SavedPasswords({ saved, onDelete, onClearAll, copyToClipboard }: Props) {
  const [search, setSearch] = useState('');

  return (
    <Card sx={{ bgcolor: 'background.paper', p: { xs: 1, sm: 3 }, height: '100%' }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontFamily: 'Outfit', fontWeight: 700, mb: 3 }}>
          Saved Passwords Drawer
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }} alignItems="center">
          <Grid size={{ xs: 12, sm: 8 }}>
            <OutlinedInput
              fullWidth
              size="small"
              placeholder="Search saved passwords..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon color="disabled" />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Button
              fullWidth
              color="error"
              variant="outlined"
              size="small"
              startIcon={<DeleteSweepIcon />}
              onClick={onClearAll}
              disabled={saved.length === 0}
            >
              Clear All
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ color: 'text.secondary' }}>Stored password list renderer setup soon.</Box>
      </CardContent>
    </Card>
  );
}
