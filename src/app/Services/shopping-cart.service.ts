import { Injectable } from '@angular/core';
import { OrderItemDTO } from '../Models/orderItemDTO';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  items: OrderItemDTO[] = [];

  constructor() {}

  addToCart(item: OrderItemDTO) {
    if (localStorage.getItem('items')) {
      this.items = JSON.parse(localStorage.getItem('items'));
    }
    this.items.push(item);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  removeItemFromCart(item: OrderItemDTO) {
    this.items = JSON.parse(localStorage.getItem('items'));
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  getItems() {
    this.items = JSON.parse(localStorage.getItem('items'));
    return this.items;
  }

  clearCart() {
    this.items = [];
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  getSize() {
    return this.items.length;
  }
}
