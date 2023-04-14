export interface FormCardValues {
  username: string;
  surname: string;
  birthday: string;
  country: string;
  gender: string;
  image: FileList | null;
  agreement: boolean;
}

export interface FormCardContent {
  username: string;
  surname: string;
  birthday: string;
  country: string;
  gender: string;
  image: string;
  agreement: boolean;
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

export interface ApiCardContent {
  id: number;
  name: string;
  image: string;
}

export interface Character {
  id: number;
  name: string;
  image: string;
  gender: string;
  species: string;
  status: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
}
