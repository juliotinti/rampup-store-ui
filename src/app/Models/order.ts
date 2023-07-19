import { Address } from './address';
import { CustomerDTO } from './customerDTO';
import { OrderItem } from './orderItem';

export interface Order {
  id: number;
  instant: Date;
  deleted: boolean;
  customer: CustomerDTO;
  deliveryAddress: Address;
  items: OrderItem[];
}
