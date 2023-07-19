import { Component } from '@angular/core';
import { Order } from 'src/app/Models/order';
import { OrderDTO } from 'src/app/Models/orderDTO';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-adm-orders',
  templateUrl: './adm-orders.component.html',
  styleUrls: ['./adm-orders.component.css'],
})
export class AdmOrdersComponent {
  currentPage: number = 0;
  orders: OrderDTO[] = [];
  error: string = null;

  displayedColumns: string[] = [
    'moment',
    'id',
    'customerId',
    'deliveryId',
    'detail',
  ];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.orderService.getAllOrders(this.currentPage).subscribe(
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
    this.getAll();
  }
}
