export interface BuildInterface {
  id?: string;
  builder?: string;
  name: string;
  description: string;
  cpu: string;
  motherboard: string;
  gpu: string;
  ram: string;
  air_cooler: string;
  liquid_cooler: string;
  hdd: string;
  ssd: string;
  psu: string;
  case: string;
}

export interface BuildErrorsInterface {
  name: [];
  description: [];
  cpu: [];
  motherboard: [];
  gpu: [];
  ram: [];
  air_cooler: [];
  liquid_cooler: [];
  cooler: [];
  hdd: [];
  ssd: [];
  psu: [];
  storage_drive: [];
  case: [];
}

export interface CommentInterface {
  build: string;
  builder: string;
  comment: string;
  builder_data?: [];
}

export interface CommentErrorsInterface {
  build: [];
  comment: [];
}

export interface RegisterInterface {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password1: string;
  password2: string;
}

export interface RegisterErrorsInterface {
  username: [];
  email: [];
  first_name: [];
  last_name: [];
  password1: [];
  password2: [];
  non_field_errors: [];
}

export interface LoginInterface {
  username: string;
  password: string;
}

export interface LoginErrorsInterface {
  username: [];
  password: [];
  non_field_errors: [];
}

export interface UserInterface {
  pk: string;
  is_admin: boolean;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}
