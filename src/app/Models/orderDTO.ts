import { OrderItemDTO } from './orderItemDTO';

export interface OrderDTO {
  id: number;
  customerId: number;
  deliveryId: number;
  orderItems: OrderItemDTO[];
  moment: Date;
}
