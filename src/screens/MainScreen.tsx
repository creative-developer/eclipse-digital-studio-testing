import { Typography } from '@mui/material';
import { Container } from '@mui/system';

interface IMainScreenProps {}

export const MainScreen: React.FC<IMainScreenProps> = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="body1">Find your Pokémon by searching by name or by its code in Pokédex.</Typography>
    </Container>
  );
};
