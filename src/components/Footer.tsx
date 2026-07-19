import { Box, Typography, Link, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ mt: 10, pb: 4, textAlign: 'center' }}>
      <Divider sx={{ mb: 4, borderColor: 'rgba(7, 22, 47, 0.08)' }} />
      <Typography variant="body2" sx={{ mb: 1, color: '#5c6573', fontFamily: '"Poppins", sans-serif' }}>
        © {new Date().getFullYear()} Developed by{' '}
        <Link
          href="https://kawerifytech.com"
          target="_blank"
          rel="noopener"
          sx={{ color: '#0b4a86', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
        >
          Kawerify Tech
        </Link>
        . Managed by Kawerify Tech as a public utility tool to be used by anyone free of charge.
      </Typography>
      <Typography
        variant="caption"
        display="block"
        sx={{ maxWidth: 650, mx: 'auto', lineHeight: 1.6, mb: 2.5, color: '#5c6573', fontFamily: '"Poppins", sans-serif' }}
      >
        Disclaimer: This tool generates passwords client-side in your browser. Saved passwords are stored locally in your browser's cache (LocalStorage) and are never transmitted to any server. Kawerify Tech does not have access to your saved passwords. Please ensure you keep a backup copy.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2.5, flexWrap: 'wrap' }}>
        {[
          { label: 'License', href: 'https://github.com/tonderaikawere/ktpasswordgenerator/blob/main/docs/LICENSE.md' },
          { label: 'Privacy Policy', href: 'https://github.com/tonderaikawere/ktpasswordgenerator/blob/main/docs/PRIVACY.md' },
          { label: 'Terms of Service', href: 'https://github.com/tonderaikawere/ktpasswordgenerator/blob/main/docs/TERMS.md' },
          { label: 'Disclaimer', href: 'https://github.com/tonderaikawere/ktpasswordgenerator/blob/main/docs/DISCLAIMER.md' },
          { label: 'Security Policy', href: 'https://github.com/tonderaikawere/ktpasswordgenerator/blob/main/docs/SECURITY.md' },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener"
            variant="caption"
            sx={{
              color: '#5c6573',
              fontFamily: '"Poppins", sans-serif',
              textDecoration: 'none',
              '&:hover': { color: '#0b4a86', textDecoration: 'underline' },
            }}
          >
            {label}
          </Link>
        ))}
      </Box>
    </Box>
  );
}
