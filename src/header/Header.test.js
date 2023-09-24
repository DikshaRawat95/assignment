import { render, screen } from '@testing-library/react';
import Header from './index';

test('renders Header successfully', () => {
  render(<Header />);
  const linkElement = screen.getByText(/GoDaddy Repo/i);
  expect(linkElement).toBeInTheDocument();
});

