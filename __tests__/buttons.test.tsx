import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DeleteInvoice } from '@/app/ui/invoices/buttons';
// import { DeleteInvoice } from '../app/ui/invoices/buttons';
// import Page from '@/app/dashboard/customers/page';

test('renders a button with the correct text', () => {
  render(<DeleteInvoice id="Delete" />);
  const button = screen.getByText('Delete');
  expect(button).toBeInTheDocument();
});
