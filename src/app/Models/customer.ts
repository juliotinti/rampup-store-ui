import { Address } from './address';
import { Order } from './order';
import { User } from './user';

export interface Customer {
  id: number;
  customerName: string;
  documentNumber: number;
  customerStatus: string;
  customerType: string;
  creditScore: string;
  user: User;
  addresses: Address[];
  order: Order[];
}
