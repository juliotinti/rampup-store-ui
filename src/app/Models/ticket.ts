import { Order } from './order';

export interface Ticket {
  id: number;
  instant: Date;
  message: string;
  solved: boolean;
  order: Order;
}
