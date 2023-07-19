import { OrderItem } from './orderItem';
import { OrderItemPk } from './orderItemPk';

export interface ProductOffering {
  id: number;
  productName: string;
  unitPrice: number;
  sellIndicator: boolean;
  state: string;
  orderItems: OrderItem[];
  deleted: boolean;
}
