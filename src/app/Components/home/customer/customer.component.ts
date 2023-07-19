import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Customer } from 'src/app/Models/customer';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  @Input() customer: Customer;

  constructor(public dialog: MatDialog) {}

  editPersonalInfo() {
    const dialogRef = this.dialog.open(EditCustomerComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log('Editing personal info closed');
    });
  }
}
