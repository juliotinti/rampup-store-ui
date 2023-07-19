import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { AuthService } from '../../Services/auth.service';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { CustomerDTO } from 'src/app/Models/customerDTO';
import { CustomerService } from 'src/app/Services/customer.service';
import { UserService } from 'src/app/Services/user.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode = true;
  error: string = null;
  showSpinner = false;

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
    customerType: 'LegalPerson',
    creditScore: '0',
    password: null,
    userId: null,
  };

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private customerService: CustomerService,
    private loginService: LoginService,
    private shoppingService: ShoppingCartService,
    private router: Router
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  submitForm() {
    this.showSpinner = true;
    if (this.isLoginMode) {
      //login
      this.authService.authenticate(this.user).subscribe(
        (response: any) => {
          this.authService.successfulLogin(response.access_token);
          this.loginService.login(this.user).subscribe((loginResponse) => {
            this.loginService.getIds(
              loginResponse.id,
              loginResponse.customer.id
            );
            this.showSpinner = false;
            this.shoppingService.clearCart();
            this.router.navigate(['home']);
          });
        },
        (response: any) => {
          this.showSpinner = false;
          if ((response.error_description = 'Bad Credentials')) {
            this.error = 'Incorrect password';
          }
          if (
            (response.error_description = 'Unexpected Error: No value present')
          ) {
            this.error = 'Email not registred';
          }
        }
      );
    } else {
      //sign up
      this.userService.insertOperator(this.user).subscribe(
        (response: any) => {
          this.customer.userId = response.id;
          this.authService
            .authenticate(this.user)
            .subscribe((response: any) => {
              //debugger;
              this.authService.successfulLogin(response.access_token);
              this.customerService.insert(this.customer).subscribe(() => {
                this.loginService
                  .login(this.user)
                  .subscribe((loginResponse) => {
                    this.loginService.getIds(
                      loginResponse.id,
                      loginResponse.customer.id
                    );
                    this.showSpinner = false;
                    this.shoppingService.clearCart();
                    this.router.navigate(['home']); //redirect to address later, to add the first customer address
                  });
              });
            });
        },
        (response: any) => {
          this.showSpinner = false;
          this.error = response.error.message;
        }
      );
    }
  }

  onSelect(customerType: string) {
    this.customer.customerType = customerType;
  }
}
