import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CreateInvoice } from '@/app/ui/invoices/buttons';

// describe('Home', () => {
//   it('renders a heading', () => {
//     render(<CreateInvoice />);

//     const heading = screen.getByRole('heading', { level: 1 });

//     expect(heading).toBeInTheDocument();
//   });
// });

// describe('Home', () => {
it('renders a link', () => {
  render(<CreateInvoice />);

  const heading = screen.getByRole('link', { name: 'Create Invoice' });

  expect(heading).toHaveAttribute('href', '/dashboard/invoices/create');
});
// });
// expect(screen.getByRole('link', { name: 'Create Invoice' })).toHaveAttribute(
//   'href',
//   '/dashboard/invoices/create',
// );
