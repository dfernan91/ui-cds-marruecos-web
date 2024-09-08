import { render, screen } from '@/test-utils';
import { Layout } from './Layout';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Layout />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
