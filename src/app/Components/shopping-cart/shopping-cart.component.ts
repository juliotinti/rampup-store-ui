import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Address } from 'src/app/Models/address';
import { OrderDTO } from 'src/app/Models/orderDTO';
import { OrderItemDTO } from 'src/app/Models/orderItemDTO';
import { CustomerService } from 'src/app/Services/customer.service';
import { OrderService } from 'src/app/Services/order.service';
import { ProductOfferingService } from 'src/app/Services/product-offering.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  customerAddresses: Address[];
  selectedAddress: Address;
  itemsInCart: OrderItemDTO[] = [];
  products: {
    productId: string;
    productName: string;
    quantity: number;
    totalPrice: number;
    orderItem: OrderItemDTO;
  }[] = [];
  orderToMake: OrderDTO = {
    id: null,
    customerId: null,
    deliveryId: null,
    orderItems: [],
    moment: null,
  };

  errorProduct: string = null;
  errorAddress: string = null;
  errorOrder: string = null;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private productService: ProductOfferingService,
    private customerService: CustomerService,
    private orderService: OrderService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.itemsInCart = this.shoppingCartService.getItems();
    this.itemsInCart.forEach((element) => {
      this.productService.getProductById(element.productId).subscribe(
        (response: any) => {
          this.products.push({
            productId: response.id,
            productName: response.productName,
            quantity: element.quantity,
            totalPrice:
              element.quantity * response.unitPrice * (1 - element.discount),
            orderItem: element,
          });
        },
        (response: any) => {
          this.errorProduct = response.error.message;
          console.log(this.errorProduct);
        }
      );
    });
    this.customerService.findCustomerById().subscribe(
      (response: any) => {
        this.customerAddresses = response.addresses;
      },
      (response: any) => {
        this.errorAddress = response.error.message;
        console.log(this.errorAddress);
      }
    );
  }

  removeProduct(orderItem: OrderItemDTO) {
    this.shoppingCartService.removeItemFromCart(orderItem);
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ShoppingCartComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log('Shopping cart closed');
    });
  }

  makeOrder() {
    this.orderToMake.orderItems = this.itemsInCart;
    this.orderToMake.deliveryId = this.selectedAddress.id;
    this.orderService.insertOrder(this.orderToMake).subscribe(() => {
      this.shoppingCartService.clearCart();
      this.router
        .navigateByUrl('/', { skipLocationChange: true })
        .then(() => this.router.navigate(['home']));
    });
  }

  selectAddress(address: Address) {
    this.selectedAddress = address;
  }
}
