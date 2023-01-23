export interface User {
  id: number;
  username: string;
  email: string;
  is_authenticated: boolean;
  is_superuser: boolean;
  last_login: string;
  date_joined: string;
}
