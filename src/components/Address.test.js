import React from 'react';
import { render, screen } from '@testing-library/react';
import Address from './Address';

describe('Address component', () => {
  test('renders Contacts with correct information', () => {
    render(<Address />);
    
    const contactsTitle = screen.getByText('Contacts');
    expect(contactsTitle).toBeInTheDocument();

    const phoneIcon = screen.getByAltText('Phone Icon');
    expect(phoneIcon).toBeInTheDocument();
    
    const phoneLink = screen.getByRole('link', { name: /123-456-7890/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+1234567890');

    const emailIcon = screen.getByAltText('Email Icon');
    expect(emailIcon).toBeInTheDocument();
    
    const emailLink = screen.getByRole('link', { name: /john\.doe@example\.com/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:john.doe@example.com');

    const skypeIcon = screen.getByAltText('Skype Icon');
    expect(skypeIcon).toBeInTheDocument();
    
    const skypeSpan = screen.getByText('Skype:');
    expect(skypeSpan).toBeInTheDocument();

    const skypeLink = screen.getByRole('link', { name: /john\.doe/i });
    expect(skypeLink).toBeInTheDocument();
    expect(skypeLink).toHaveAttribute('href', 'skype:john.doe?call');
  });
});