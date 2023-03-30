import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCard from 'components/FormCard';
import { FormCardContent } from 'utils/types';

const file = new File(['cat'], 'cat.jpg', { type: 'image/jpeg' });
const formData: FormCardContent = {
  username: 'Karina',
  surname: 'Holms',
  birthday: '2010-08-12',
  country: 'Sweden',
  // gender: 'Female',
  image: file,
  agreement: true,
};

describe('card with data from the form', () => {
  it("renders all the card's content", () => {
    render(<FormCard formData={formData} />);
    expect(screen.getByText(/Karina/i)).toBeInTheDocument();
    expect(screen.getByText(/Holms/i)).toBeInTheDocument();
    expect(screen.getByText(/2010-08-12/i)).toBeInTheDocument();
    expect(screen.getByText(/Sweden/i)).toBeInTheDocument();
    expect(screen.getByText(/Female/i)).toBeInTheDocument();
  });
});
