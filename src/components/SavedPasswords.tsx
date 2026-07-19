import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { SavedPassword } from '../types';

interface Props {
  saved: SavedPassword[];
  onDelete: (id: string) => void;
  onClearAll: () => void;
  copyToClipboard: (pwd: string) => void;
}

export default function SavedPasswords({ saved, onDelete, onClearAll, copyToClipboard }: Props) {
  return (
    <Card sx={{ bgcolor: 'background.paper', p: { xs: 1, sm: 3 }, height: '100%' }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontFamily: 'Outfit', fontWeight: 700, mb: 3 }}>
          Saved Passwords Drawer
        </Typography>
        <Box sx={{ color: 'text.secondary' }}>Saved passwords list interface coming soon.</Box>
      </CardContent>
    </Card>
  );
}
