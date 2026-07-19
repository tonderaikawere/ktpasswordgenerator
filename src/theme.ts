import { createTheme } from '@mui/material/styles';

const KT_BLUE        = '#0b4a86'; // Kawerify primary blue
const KT_BLUE_STRONG = '#064780'; // Secondary deep blue
const KT_BLUE_DEEP   = '#061a3b'; // Very deep navy
const KT_INK         = '#07162f'; // Body text
const KT_MUTED       = '#5c6573'; // Secondary text
const KT_LINE        = '#d6dce5'; // Borders
const KT_SOFT        = '#f6f9fd'; // Backgrounds
const KT_CYAN        = '#00acdb'; // Accent cyan (from logo)
const KT_WHITE       = '#ffffff';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: KT_BLUE,
      light: '#3c79b8',
      dark: KT_BLUE_DEEP,
    },
    secondary: {
      main: KT_CYAN,
      light: '#35c4e8',
      dark: '#0089b2',
    },
    background: {
      default: KT_SOFT,
      paper: KT_WHITE,
    },
    divider: KT_LINE,
    text: {
      primary: KT_INK,
      secondary: KT_MUTED,
    },
    success: {
      main: '#2e7d32',
    },
    warning: {
      main: '#e65100',
    },
    error: {
      main: '#c62828',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Aclonica", "Poppins", sans-serif',
      fontWeight: 900,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Aclonica", "Poppins", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.015em',
    },
    h5: {
      fontFamily: '"Aclonica", "Poppins", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontFamily: '"Aclonica", "Poppins", sans-serif',
      fontWeight: 600,
    },
    button: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: KT_SOFT,
          backgroundImage: `linear-gradient(160deg, ${KT_WHITE} 0%, ${KT_SOFT} 60%, #e8f0fb 100%)`,
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          margin: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: `1px solid ${KT_LINE}`,
          boxShadow: `0 8px 18px rgba(7, 22, 47, 0.06)`,
          borderRadius: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: `0 4px 12px rgba(11, 74, 134, 0.18)`,
          },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${KT_BLUE} 0%, ${KT_BLUE_STRONG} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, #0d5498 0%, ${KT_BLUE} 100%)`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: KT_LINE,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: `rgba(11, 74, 134, 0.4)`,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: KT_BLUE,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 500,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: `rgba(11, 74, 134, 0.08)`,
          borderRadius: 4,
        },
      },
    },
  },
});

// Unused variables silenced
void KT_BLUE_DEEP;

export default theme;
