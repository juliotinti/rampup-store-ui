import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDTO } from '../Models/customerDTO';
import { Customer } from '../Models/customer';
import { AddressDTO } from '../Models/addressDTO';
import { Address } from '../Models/address';
import { CustomerPatch } from '../Models/customerPatch';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  insert(customer: CustomerDTO) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.post<CustomerDTO>(
      `http://localhost:8080/customers/`,
      customer,
      options
    );
  }

  editCustomer(customer: CustomerPatch) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };
    return this.http.patch<Customer>(
      `http://localhost:8080/customers/${localStorage.customerId}`,
      customer,
      options
    );
  }

  findCustomerById() {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.get<Customer>(
      `http://localhost:8080/customers/home/${localStorage.customerId}`,
      options
    );
  }

  addAddress(address: AddressDTO) {
    address.customerId = localStorage.customerId;
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };
    return this.http.post<Address>(
      `http://localhost:8080/customers/${localStorage.customerId}/addresses/`,
      address,
      options
    );
  }

  editAddress(address: Address, id: number) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };
    return this.http.patch<Address>(
      `http://localhost:8080/customers/${localStorage.customerId}/addresses/${id}`,
      address,
      options
    );
  }

  deleteAddress(id: number) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };
    return this.http.delete(
      `http://localhost:8080/customers/${localStorage.customerId}/addresses/${id}`,
      options
    );
  }

  findAddressById(id: number) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.get<Address>(
      `http://localhost:8080/customers/${localStorage.customerId}/address/id/${id}`,
      options
    );
  }
}
