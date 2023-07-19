import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddressDTO } from 'src/app/Models/addressDTO';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css'],
})
export class AddAddressComponent {
  address: AddressDTO = {
    id: null,
    street: '',
    houseNumber: null,
    neighborhood: '',
    zipCode: null,
    country: '',
    addressType: 'HomeAddress',
    customerId: null,
  };
  error: string = null;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  submitForm() {
    this.customerService.addAddress(this.address).subscribe(
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
