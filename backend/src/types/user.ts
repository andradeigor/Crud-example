export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  password: null;
}

export interface UserRequest {
  name: string;
  email: string;
  password: string;
}
