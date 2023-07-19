import { OrderItem } from './orderItem';

export interface ProductOfferingInsert {
  productName: string;
  unitPrice: number;
  sellIndicator: boolean;
  state: string;
}
