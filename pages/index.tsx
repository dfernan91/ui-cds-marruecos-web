import { Container, Grid } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Carrusel } from '@/components/Carrusel/Carrusel';

export default function HomePage() {
  return (
    <Container size="lg" mt={24}>
      <Grid>
        <Grid.Col>
          <Carrusel />
        </Grid.Col>
      </Grid>
      <ColorSchemeToggle />
    </Container>
  );
}
