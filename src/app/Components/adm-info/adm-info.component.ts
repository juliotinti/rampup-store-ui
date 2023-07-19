import { Component, OnInit } from '@angular/core';
import { ItemsSum } from 'src/app/Models/itemsSum';
import { OrdersInfo } from 'src/app/Models/ordersInfo';
import { OrderService } from 'src/app/Services/order.service';
import { ProductOfferingService } from 'src/app/Services/product-offering.service';

@Component({
  selector: 'app-adm-info',
  templateUrl: './adm-info.component.html',
  styleUrls: ['./adm-info.component.css'],
})
export class AdmInfoComponent implements OnInit {
  soldItems: ItemsSum[] = [];
  ordersInfo: OrdersInfo = {
    ordersQuantity: 0,
    cancelledOrdersQuantity: 0,
  };
  prodInfo = {
    allProducts: 0,
    productsToSale: 0,
  };
  aux: {
    name: string;
    value: number;
  }[] = [];
  chartData: {
    name: string;
    value: number;
  }[] = [];

  constructor(
    private orderService: OrderService,
    private productOfferingService: ProductOfferingService
  ) {}

  ngOnInit() {
    this.productOfferingService
      .getProductToSaleQuantity()
      .subscribe((response: any) => {
        this.prodInfo.allProducts = response[0];
        this.prodInfo.productsToSale = response[1];
        this.orderService
          .getSoldProductsQuantity()
          .subscribe((response: any) => {
            this.soldItems = response;
            for (let i = 1; i <= this.prodInfo.allProducts; i++) {
              for (let element of this.soldItems) {
                if (i == element.prod_id) {
                  this.aux.push({
                    name: element.prod_name,
                    value: element.quantity,
                  });
                }
              }
            }
            this.chartData = this.aux;
          });
        this.orderService
          .getOrderMadeAndCancelled()
          .subscribe((response: any) => {
            this.ordersInfo.ordersQuantity = response[0];
            this.ordersInfo.cancelledOrdersQuantity = response[1];
          });
      });
  }
}
