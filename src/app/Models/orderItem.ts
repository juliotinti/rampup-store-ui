import { OrderItemPk } from './orderItemPk';

export interface OrderItem {
  id: OrderItemPk;
  discount: number;
  quantity: number;
  totalPrice: number;
}
