import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from '../Models/address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) {}

  // findAddressById(id: number): Observable<Address> {
  //   let options = {
  //     headers: new HttpHeaders()
  //       .set('Content-Type', 'application/json')
  //       .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
  //   };

  //   return this.http.get<Address>(
  //     `http://localhost:8080/customers/${localStorage.customerId}/address/id/${id}`,
  //     options
  //   );
  // }
}
