import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-delete-address',
  templateUrl: './delete-address.component.html',
  styleUrls: ['./delete-address.component.css'],
})
export class DeleteAddressComponent {
  error: string = null;

  constructor(
    private router: Router,
    private customerService: CustomerService,
    @Inject(MAT_DIALOG_DATA) public addressId: any,
    public dialogRef: MatDialogRef<DeleteAddressComponent>
  ) {}

  deleteAddress() {
    this.customerService.deleteAddress(this.addressId.id).subscribe(
      () => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => this.router.navigate(['home']));
      },
      (response: any) => {
        this.error = response.error.message;
        console.log(this.error);
      }
    );
  }
}
