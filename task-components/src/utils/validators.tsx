export const validateTextField = (text: string): boolean => {
  const textRegex = new RegExp('^\\D+$');
  const valid = textRegex.test(text);
  return valid;
};

export const validateBirthDate = (date: string): boolean => {
  const today = new Date().toISOString().slice(0, 10);
  if (date > today) {
    return false;
  } else {
    return true;
  }
};
