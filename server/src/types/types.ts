export type User = {
  _id?: string;
  username: string;
  email: string;
  avatar?: String;
  password: string;
  role: string;
};

export interface IAuthDocument extends User {
  isValidPassword: (password: string) => Promise<Boolean>;
}
