import React from 'react';
import { Box, Grid2 as Grid, Typography, Card, CardContent } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';

export default function EducationalHub() {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h5" sx={{ fontFamily: 'Outfit', mb: 4, textAlign: 'center', fontWeight: 700, color: 'primary.light' }}>
        Learn Password Security
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <CalculateIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" sx={{ fontFamily: 'Outfit', fontWeight: 600 }}>
                  What is Password Entropy?
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" paragraph>
                Password entropy is a mathematical measure of how unpredictable a password is. It is measured in <strong>bits</strong>. The formula is:
                <br />
                <code style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: 4, display: 'inline-block', margin: '6px 0' }}>
                  Entropy = Length × log₂(Pool Size)
                </code>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The higher the entropy, the more combinations an attacker has to guess. To secure yourself against brute-force attacks, aim for at least <strong>60 bits</strong> for regular accounts, and <strong>80+ bits</strong> for critical logins. Increasing length is far more effective than adding complex symbols!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
