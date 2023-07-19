import { Component, Inject, OnInit } from '@angular/core';
import { Address } from 'src/app/Models/address';
import { AddressService } from 'src/app/Services/address.service';
import { CustomerService } from 'src/app/Services/customer.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css'],
})
export class EditAddressComponent implements OnInit {
  address: Address = {
    id: null,
    street: '',
    houseNumber: null,
    neighborhood: '',
    zipCode: null,
    country: '',
    addressType: 'HomeAddress',
    customer: null,
  };
  error: string = null;

  constructor(
    private customerService: CustomerService,
    @Inject(MAT_DIALOG_DATA) public addressId: any,
    public dialogRef: MatDialogRef<EditAddressComponent>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerService
      .findAddressById(this.addressId.id)
      .subscribe((response: any) => {
        this.address = response;
      });
  }

  submitForm() {
    this.customerService.editAddress(this.address, this.addressId.id).subscribe(
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

  onSelect(addressType: string) {
    this.address.addressType = addressType;
  }
}
