export interface FormCardContent {
  name: string;
  surname: string;
  date: string;
  country: string;
  file: File | null;
}

export type FormState = {
  errors: {
    name: string;
    surname: string;
    date: string;
    country: string;
    file: string;
  };
};
