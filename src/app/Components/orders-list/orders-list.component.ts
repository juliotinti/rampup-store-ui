import { Component } from '@angular/core';
import { Order } from 'src/app/Models/order';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent {
  currentPage: number = 0;
  orders: Order[] = [];
  error: string = null;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.orderService.getAllCustomersOrders(this.currentPage).subscribe(
      (response: any) => {
        this.orders = response;
      },
      (response: any) => {
        this.error = response.error.message;
        console.log(this.error);
      }
    );
  }

  onPaginateChange(event) {
    this.currentPage = event.pageIndex;
    this.findAll();
  }
}
