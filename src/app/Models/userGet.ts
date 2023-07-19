import { Customer } from './customer';
import { CustomerDTO } from './customerDTO';
import { Role } from './role';

export interface UserGet {
  id: number;
  email: string;
  roles: Role[];
}
