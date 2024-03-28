import { render, screen } from '@testing-library/react';
import Page from '../app/invoices/page';

it('should have invoices head element', () => {
  render(<Page />);

  const myElement = screen.getByText('Invoices');
  expect(myElement).toBeInTheDocument();
});
