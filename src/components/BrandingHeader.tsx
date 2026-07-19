import { Box, Typography, Link, Chip, Grid2 as Grid } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

export default function BrandingHeader() {
  return (
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      {/* Logo Row */}
      <Grid container justifyContent="center" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
        <Grid>
          <SecurityIcon sx={{ fontSize: 40, color: '#0b4a86', verticalAlign: 'middle', mr: 1 }} />
        </Grid>
        <Grid>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: '"Aclonica", "Poppins", sans-serif',
              fontWeight: 900,
              fontSize: { xs: '2rem', sm: '2.8rem' },
              background: 'linear-gradient(90deg, #0b4a86 0%, #00acdb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              letterSpacing: '-0.02em',
            }}
          >
            KAWERIFY TECH PASSWORDS
          </Typography>
        </Grid>
      </Grid>

      <Typography
        variant="body1"
        sx={{ maxWidth: '640px', mx: 'auto', mb: 3, color: '#5c6573', fontFamily: '"Poppins", sans-serif', fontSize: '1rem', lineHeight: 1.7 }}
      >
        An ultra-secure, cryptographically-strong password utility. Developed and maintained by{' '}
        <Link
          href="https://kawerifytech.com"
          target="_blank"
          rel="noopener"
          sx={{ color: '#0b4a86', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
        >
          Kawerify Tech
        </Link>
        .
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, flexWrap: 'wrap' }}>
        <Chip
          icon={<VerifiedIcon style={{ color: '#0b4a86', fontSize: 16 }} />}
          label="100% Free of Charge"
          variant="outlined"
          sx={{
            borderColor: 'rgba(11, 74, 134, 0.3)',
            bgcolor: 'rgba(11, 74, 134, 0.05)',
            color: '#0b4a86',
            fontWeight: 500,
            fontFamily: '"Poppins", sans-serif',
          }}
        />
        <Chip
          icon={<MoneyOffIcon style={{ color: '#e65100', fontSize: 16 }} />}
          label="Strictly Non-Commercial"
          variant="outlined"
          sx={{
            borderColor: 'rgba(230, 81, 0, 0.3)',
            bgcolor: 'rgba(230, 81, 0, 0.05)',
            color: '#c84b00',
            fontWeight: 500,
            fontFamily: '"Poppins", sans-serif',
          }}
        />
        <Chip
          icon={<TrackChangesIcon style={{ color: '#2e7d32', fontSize: 16 }} />}
          label="No Ads · No Tracking"
          variant="outlined"
          sx={{
            borderColor: 'rgba(46, 125, 50, 0.3)',
            bgcolor: 'rgba(46, 125, 50, 0.05)',
            color: '#1b5e20',
            fontWeight: 500,
            fontFamily: '"Poppins", sans-serif',
          }}
        />
      </Box>
    </Box>
  );
}
