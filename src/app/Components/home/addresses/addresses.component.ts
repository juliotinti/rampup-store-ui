import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Address } from 'src/app/Models/address';
import { AddAddressComponent } from './add-address/add-address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { DeleteAddressComponent } from './delete-address/delete-address.component';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css'],
})
export class AddressesComponent {
  @Input() addresses: Address[];

  constructor(public dialog: MatDialog) {}

  addOne() {
    const dialogRef = this.dialog.open(AddAddressComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log('Adding address closed');
    });
  }

  editAddress(id: number) {
    const dialogRef = this.dialog.open(EditAddressComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Editing address closed');
    });
  }

  deleteAddress(id: number) {
    const dialogRef = this.dialog.open(DeleteAddressComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Deleting address closed');
    });
  }
}
