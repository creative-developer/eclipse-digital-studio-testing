import { AppBar, Box, Container, Typography } from '@mui/material';

export const Header: React.FC = () => {
  return (
    <AppBar sx={{ mb: 2 }} position="static">
      <Container maxWidth="xl">
        <Box py={3} minHeight={60}>
          <Typography variant="h4">List of Pokémon</Typography>
        </Box>
      </Container>
    </AppBar>
  );
};
