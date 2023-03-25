function validateForm(
  name: string,
  surname: string,
  date: string,
  country: string,
  gender: string,
  file: File | null,
  agreement: boolean
) {
  const errors = {
    name: '',
    surname: '',
    date: '',
    country: '',
    gender: '',
    file: '',
    agreement: '',
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
  if (!gender) {
    errors.gender = 'Please select a gender';
  }
  if (!file) {
    errors.file = 'Please upload your profile image';
  }
  if (agreement === false) {
    errors.agreement = 'Please check the box to agree to our Terms and Policy';
  }
  return errors;
}

export default validateForm;
