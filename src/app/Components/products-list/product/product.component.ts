import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductOffering } from 'src/app/Models/productOffering';
import { AddProductToShoppingComponent } from '../add-product-to-shopping/add-product-to-shopping.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() productOffering: ProductOffering;

  constructor(public dialog: MatDialog) {}

  addToShoppingCart(id: number) {
    const dialogRef = this.dialog.open(AddProductToShoppingComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Adding to shopping cart closed');
    });
  }
}
