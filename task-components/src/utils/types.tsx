export interface FormCardContent {
  name: string;
  surname: string;
  date: string;
  country: string;
  gender: string;
  file: File | null;
}

export type FormState = {
  errors: {
    name: string;
    surname: string;
    date: string;
    country: string;
    gender: string;
    file: string;
    agreement: string;
  };
  isValid: boolean;
};

export interface CardContent {
  id: number | string;
  image: string;
  title: string;
  designer: string;
  categories: string;
  likes: string;
  views: string;
}
