import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Order } from 'src/app/Models/order';
import { AuthService } from 'src/app/Services/auth.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent implements OnInit {
  id: number;
  order: Order;
  error: string = null;
  isAdmin: boolean;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.orderService.getOrderById(this.id).subscribe(
        (response: any) => {
          this.order = response;
        },
        (response: any) => {
          this.error = response.error.message;
          console.log(this.error);
        }
      );
    });
  }
}
