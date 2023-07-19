import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderItemDTO } from 'src/app/Models/orderItemDTO';
import { ProductOffering } from 'src/app/Models/productOffering';
import { ProductOfferingService } from 'src/app/Services/product-offering.service';
import { ShoppingCartComponent } from '../../shopping-cart/shopping-cart.component';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-add-product-to-shopping',
  templateUrl: './add-product-to-shopping.component.html',
  styleUrls: ['./add-product-to-shopping.component.css'],
})
export class AddProductToShoppingComponent {
  product: ProductOffering;
  error: string = null;
  item: OrderItemDTO = {
    productId: this.productId.id,
    discount: 0,
    quantity: 1,
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public productId: any,
    public dialogRef: MatDialogRef<AddProductToShoppingComponent>,
    private router: Router,
    private productService: ProductOfferingService,
    private shoppingService: ShoppingCartService
  ) {}

  ngOnInit() {
    this.productService.getProductById(this.productId.id).subscribe(
      (response: any) => {
        this.product = response;
      },
      (response: any) => {
        this.error = response.error.message;
        console.log(this.error);
      }
    );
  }

  submitForm() {
    this.shoppingService.addToCart(this.item);
  }

  addQtd() {
    this.item.quantity++;

    if (this.item.quantity >= 10) {
      this.item.quantity = 10;
    }
  }

  removeQtd() {
    this.item.quantity--;

    if (this.item.quantity <= 1) {
      this.item.quantity = 1;
    }
  }
}
