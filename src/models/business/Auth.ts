export type LoginCredentials = {
  username: string;
  password: string;
};

export type Login = (credentials: LoginCredentials) => void;

export type Logout = VoidFunction;

export type User = {
  login: string;
};
