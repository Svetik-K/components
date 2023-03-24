function validateForm(
  name: string,
  surname: string,
  date: string,
  country: string,
  file: File | null
) {
  const errors = {
    name: '',
    surname: '',
    date: '',
    country: '',
    file: '',
  };
  if (!name) {
    errors.name = 'Please enter your name';
  }
  if (!surname) {
    errors.surname = 'Please enter your surname';
  }
  if (!date) {
    errors.date = 'Please enter your date of birth';
  }
  if (country === 'Choose Your country') {
    errors.country = 'Please choose your country';
  }
  if (!file) {
    errors.file = 'Please upload your profile image';
  }
  return errors;
}

export default validateForm;
