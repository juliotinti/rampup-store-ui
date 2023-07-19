import { CustomerDTO } from './customerDTO';

export interface User {
  id: number;
  email: string;
  password: string;
  customer: CustomerDTO;
}
