import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../Models/order';
import { OrderDTO } from '../Models/orderDTO';
import { ItemsSum } from '../Models/itemsSum';
import { OrdersInfo } from '../Models/ordersInfo';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getAllCustomersOrders(page: number) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.get<Order[]>(
      `http://localhost:8080/customers/${localStorage.customerId}/orders/page/${page}`,
      options
    );
  }

  getOrderById(id: number) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.get<Order>(`http://localhost:8080/orders/${id}`, options);
  }

  getAllOrders(page: number) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.get<Order[]>(
      `http://localhost:8080/orders/page/${page}`,
      options
    );
  }

  insertOrder(order: OrderDTO) {
    order.customerId = localStorage.customerId;
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.post<Order>(
      `http://localhost:8080/orders/`,
      order,
      options
    );
  }

  getSoldProductsQuantity() {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.get<ItemsSum[]>(
      `http://localhost:8080/orders/sold`,
      options
    );
  }

  getOrderMadeAndCancelled() {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.get<OrdersInfo>(
      `http://localhost:8080/orders/info`,
      options
    );
  }
}
