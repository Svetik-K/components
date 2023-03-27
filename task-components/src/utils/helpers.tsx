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
  } else if (!validateTextField(name)) {
    errors.name = 'Your name should contain only letters';
  }

  if (!surname) {
    errors.surname = 'Please enter your surname';
  } else if (!validateTextField(surname)) {
    errors.surname = 'Your surname should contain only letters';
  }

  if (!date) {
    errors.date = 'Please enter your date of birth';
  } else if (!validateBirthDate(date)) {
    errors.date = `The birth date can't be more than today's date`;
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

const validateTextField = (text: string) => {
  const textRegex = new RegExp('^\\D+$');
  const valid = textRegex.test(text);
  return valid;
};

const validateBirthDate = (date: string) => {
  const today = new Date().toISOString().slice(0, 10);
  if (date > today) {
    return false;
  } else {
    return true;
  }
};

export { validateForm };
