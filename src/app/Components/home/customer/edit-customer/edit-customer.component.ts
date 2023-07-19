import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerPatch } from 'src/app/Models/customerPatch';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent {
  customer: CustomerPatch = {
    customerName: '',
    customerType: 'LegalPerson',
  };
  error: string = null;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitForm() {
    this.customerService.editCustomer(this.customer).subscribe(
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

  onSelect(customerType: string) {
    this.customer.customerType = customerType;
  }
}
