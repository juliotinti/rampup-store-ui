import { CustomerDTO } from './customerDTO';

export interface Address {
  id: number;
  street: string;
  houseNumber: number;
  neighborhood: string;
  zipCode: number;
  country: string;
  addressType: string;
  customer: CustomerDTO;
}
