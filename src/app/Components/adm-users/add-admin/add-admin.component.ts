import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDTO } from 'src/app/Models/customerDTO';
import { User } from 'src/app/Models/user';
import { CustomerService } from 'src/app/Services/customer.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent {
  constructor(
    private userService: UserService,
    private customerService: CustomerService,
    private router: Router
  ) {}

  userError: string = null;
  customerError: string = null;

  user: User = {
    id: null,
    email: '',
    password: '',
    customer: null,
  };

  customer: CustomerDTO = {
    id: null,
    customerName: null,
    documentNumber: null,
    customerStatus: 'Active Customer',
    customerType: 'Technical',
    creditScore: '0',
    password: null,
    userId: null,
  };

  submitForm() {
    this.userService.insertAdmin(this.user).subscribe(
      (response: any) => {
        this.customer.userId = response.id;
        this.customerService.insert(this.customer).subscribe(
          () => {
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => this.router.navigate(['admin/users']));
          },
          (response: any) => {
            this.customerError = response.error.message;
            console.log(this.customerError);
          }
        );
      },
      (response: any) => {
        this.userError = response.error.message;
        console.log(this.userError);
      }
    );
  }

  onSelect(customerType: string) {
    this.customer.customerType = customerType;
  }
}
