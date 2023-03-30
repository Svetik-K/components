import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from 'components/Form';

const onSubmitMock = jest.fn();

describe('form', () => {
  it('renders all content of the form', () => {
    render(<Form onSubmit={onSubmitMock} />);
    expect(screen.getByRole('heading', { name: 'Fill in the form below' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Name:*' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Surname:*' })).toBeInTheDocument();
    expect(screen.getByLabelText('Date of birth:*')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Choose Your country' })).toBeInTheDocument();
    const radioMale = screen.getByRole('radio', { name: 'Male' });
    expect(radioMale).toBeInTheDocument();
    expect(radioMale).not.toBeChecked();
    const radioFemale = screen.getByRole('radio', { name: 'Female' });
    expect(radioFemale).toBeInTheDocument();
    expect(radioFemale).not.toBeChecked();
    const radioOther = screen.getByRole('radio', { name: 'Other' });
    expect(radioOther).toBeInTheDocument();
    expect(radioOther).not.toBeChecked();
    expect(screen.getByLabelText('Upload your profile image:*')).toBeInTheDocument();
    const agreement = screen.getByLabelText(/I have read the Terms and Policy/i);
    expect(agreement).toBeInTheDocument();
    expect(agreement).not.toBeChecked();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('renders all error messages when submit an empty form', async () => {
    render(<Form onSubmit={onSubmitMock} />);
    const button = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(button);
    await screen.findByText('Please enter your name');
    await screen.findByText('Please enter your surname');
    await screen.findByText('Please enter your date of birth');
    await screen.findByText('Please choose your country');
    await screen.findByText('Please select a gender');
    await screen.findByText('Please upload your profile image');
    await screen.findByText('Please check the box to agree to our Terms and Policy');
  });

  it('should show error message if name input contains numbers', async () => {
    render(<Form onSubmit={onSubmitMock} />);
    const nameInput = screen.getByRole('textbox', { name: 'Name:*' });
    fireEvent.change(nameInput, { target: { value: '918739yiqyuyqi' } });
    const button = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(button);
    await screen.findByText('Your name should contain only letters');
  });

  it('should show error message if surname input contains numbers', async () => {
    render(<Form onSubmit={onSubmitMock} />);
    const surnameInput = screen.getByRole('textbox', { name: 'Surname:*' });
    fireEvent.change(surnameInput, { target: { value: 'ibwe93b46bw8jogw' } });
    const button = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(button);
    await screen.findByText('Your surname should contain only letters');
  });

  it("should show error message if date is more than today's date", async () => {
    render(<Form onSubmit={onSubmitMock} />);
    const birthdate = screen.getByLabelText('Date of birth:*');
    fireEvent.change(birthdate, { target: { value: '2023-10-26' } });
    const button = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(button);
    await screen.findByText(`The birth date can't be more than today's date`);
  });

  it('no errors shown after the fields have been filled with relevant data', () => {
    render(<Form onSubmit={onSubmitMock} />);
    const nameInput = screen.getByRole('textbox', { name: 'Name:*' });
    userEvent.type(nameInput, 'Michaella');
    const surnameInput = screen.getByRole('textbox', { name: 'Surname:*' });
    userEvent.type(surnameInput, 'Lindström');
    const birthDate = screen.getByLabelText('Date of birth:*');
    fireEvent.change(birthDate, { target: { value: '2020-10-26' } });
    const select = screen.getByRole('combobox');
    userEvent.selectOptions(select, 'Sweden');
    const gender = screen.getByRole('radio', { name: 'Female' });
    userEvent.click(gender);
    const fileInput = screen.getByLabelText(/Upload your/i);
    const file = new File(['cat'], 'cat.jpg', { type: 'image/jpeg' });
    userEvent.upload(fileInput, file);
    const agreement = screen.getByLabelText(/I have read the Terms/i);
    userEvent.click(agreement);
    const button = screen.getByRole('button', { name: 'Submit' });
    userEvent.click(button);
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument();
    expect(screen.queryByText('Please enter your surname')).not.toBeInTheDocument();
    expect(screen.queryByText('Please enter your date of birth')).not.toBeInTheDocument();
    expect(screen.queryByText('Please choose your country')).not.toBeInTheDocument();
    expect(screen.queryByText('Please select a gender')).not.toBeInTheDocument();
    expect(screen.queryByText('Please upload your profile image')).not.toBeInTheDocument();
    expect(
      screen.queryByText('Please check the box to agree to our Terms and Policy')
    ).not.toBeInTheDocument();
    // expect(onSubmitMock).toBeCalled();
  });
});
