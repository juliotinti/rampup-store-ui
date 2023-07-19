import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderItemDTO } from 'src/app/Models/orderItemDTO';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  itemsQuantity(): number {
    let items: OrderItemDTO[] = JSON.parse(localStorage.getItem('items'));

    if (items != null) {
      return items.length;
    } else {
      return 0;
    }
  }
  toShoppingCart() {
    const dialogRef = this.dialog.open(ShoppingCartComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log('Shopping cart closed');
    });
  }
}
