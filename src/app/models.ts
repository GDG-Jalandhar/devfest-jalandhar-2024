export interface IPartner {
  image: string;
  name: string;
  link: string;
  addName: boolean;
  bgColor?: string;
}

export interface IPerson {
  name: string;
  designation: string;
  organisation: string;
  photoUrl: string;
  bio?: string;
  links?: ILinks;
}

export interface ILinks {
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  github?: string;
  medium?: string;
  instagram?: string;
  others?: string;
}
