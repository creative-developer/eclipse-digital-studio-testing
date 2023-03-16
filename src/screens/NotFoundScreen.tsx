import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from 'routes/routes';

export const NotFoundScreen: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" py={8}>
        <Box mb={2}>
          <Typography variant="h2">Error 404</Typography>
        </Box>
        <Box mb={4}>
          <Typography>Page not found</Typography>
        </Box>

        <Link to={routes.MainScreen.path} className="router-link">
          <Button variant="outlined" color="primary">
            Go to home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};
