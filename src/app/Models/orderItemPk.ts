import { Order } from './order';
import { ProductOffering } from './productOffering';

export interface OrderItemPk {
  order: Order;
  productOffering: ProductOffering;
}
