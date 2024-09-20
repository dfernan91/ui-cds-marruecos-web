import { render, screen } from '@/test-utils';
import { Carrusel } from './Carrusel';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Carrusel />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
