import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/Models/address';
import { Customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  customer: Customer;
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.findCustomerById().subscribe((response: any) => {
      this.customer = response;
    });
  }
}
