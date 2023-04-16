import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from 'app/store';
import Form from 'components/Form';
import { Provider } from 'react-redux';

const onSubmitMock = jest.fn();
const file = new File(['cat'], 'cat.jpg', { type: 'image/jpeg' });

describe('form', () => {
  it('renders all content of the form', () => {
    render(
      <Provider store={store}>
        <Form createCards={onSubmitMock} />
      </Provider>
    );
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
    render(
      <Provider store={store}>
        <Form createCards={onSubmitMock} />
      </Provider>
    );
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
    render(
      <Provider store={store}>
        <Form createCards={onSubmitMock} />
      </Provider>
    );
    const nameInput = screen.getByRole('textbox', { name: 'Name:*' });
    fireEvent.change(nameInput, { target: { value: '918739yiqyuyqi' } });
    const button = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(button);
    await screen.findByText('Your name should contain only letters');
  });

  it('should show error message if surname input contains numbers', async () => {
    render(
      <Provider store={store}>
        <Form createCards={onSubmitMock} />
      </Provider>
    );
    const surnameInput = screen.getByRole('textbox', { name: 'Surname:*' });
    fireEvent.change(surnameInput, { target: { value: 'ibwe93b46bw8jogw' } });
    const button = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(button);
    await screen.findByText('Your surname should contain only letters');
  });

  it("should show error message if date is more than today's date", async () => {
    render(
      <Provider store={store}>
        <Form createCards={onSubmitMock} />
      </Provider>
    );
    const birthdate = screen.getByLabelText('Date of birth:*');
    fireEvent.change(birthdate, { target: { value: '2023-10-26' } });
    const button = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(button);
    await screen.findByText(`The birth date can not be more than the current date`);
  });

  it('no errors shown after the fields have been filled with relevant data', () => {
    render(
      <Provider store={store}>
        <Form createCards={onSubmitMock} />
      </Provider>
    );
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
  });

  it('onSubmit is called after submitting relevant data, save message shown, a card is created', () => {
    render(
      <Provider store={store}>
        <Form createCards={onSubmitMock} />
      </Provider>
    );
    const nameInput = screen.getByRole('textbox', { name: 'Name:*' });
    userEvent.type(nameInput, 'Alexandra');
    const surnameInput = screen.getByRole('textbox', { name: 'Surname:*' });
    userEvent.type(surnameInput, 'Helmquist');
    const birthDate = screen.getByLabelText('Date of birth:*');
    fireEvent.change(birthDate, { target: { value: '2012-06-14' } });
    const select = screen.getByRole('combobox');
    userEvent.selectOptions(select, 'Japan');
    const gender = screen.getByRole('radio', { name: 'Female' });
    userEvent.click(gender);
    const fileInput = screen.getByLabelText(/Upload your/i);
    userEvent.upload(fileInput, file);
    const agreement = screen.getByLabelText(/I have read the Terms/i);
    userEvent.click(agreement);
    const button = screen.getByRole('button', { name: 'Submit' });
    userEvent.click(button);
    waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledTimes(1);
      expect(screen.getByText(/data have been saved/i)).toBeInTheDocument();
      expect(screen.getByText(/personal card/i)).toBeInTheDocument();
      expect(screen.getByAltText(/Alexandra/i)).toBeInTheDocument();
      expect(screen.getByText(/Alexandra/i)).toBeInTheDocument();
      expect(screen.getByText(/Helmquist/i)).toBeInTheDocument();
      expect(screen.getByText(/Female/i)).toBeInTheDocument();
      expect(screen.getByText(/2012-06-14/i)).toBeInTheDocument();
      expect(screen.getByText(/Japan/i)).toBeInTheDocument();
      expect(nameInput).toHaveDisplayValue('');
      expect(surnameInput).toHaveDisplayValue('');
      expect(gender).not.toBeChecked();
      expect(agreement).not.toBeChecked();
    });
    expect(screen.queryByText(/data have been saved/i)).not.toBeInTheDocument();
  });
});
