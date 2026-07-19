import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Container, Grid2 as Grid, Box, Alert, Snackbar } from '@mui/material';
import theme from './theme';
import { GenOptions, SavedPassword } from './types';

export default function App() {
  const [password, setPassword] = useState('');
  const [savedPasswords, setSavedPasswords] = useState<SavedPassword[]>([]);
  const [alertInfo, setAlertInfo] = useState<{ open: boolean; message: string; severity: 'success' | 'info' | 'warning' | 'error' }>({
    open: false,
    message: '',
    severity: 'success'
  });

  const triggerAlert = (message: string, severity: 'success' | 'info' | 'warning' | 'error' = 'success') => {
    setAlertInfo({ open: true, message, severity });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid size={12}>
              <Box sx={{ color: 'text.primary', textAlign: 'center', py: 2 }}>
                Kawerify Tech Password Generator
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Snackbar
          open={alertInfo.open}
          autoHideDuration={4000}
          onClose={() => setAlertInfo({ ...alertInfo, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity={alertInfo.severity} sx={{ width: '100%' }}>
            {alertInfo.message}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}
