import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductOffering } from '../Models/productOffering';
import { ProductOfferingInsert } from '../Models/productOfferingInsert';

@Injectable({
  providedIn: 'root',
})
export class ProductOfferingService {
  constructor(private http: HttpClient) {}

  getAllProducts(page: number) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.get<ProductOffering[]>(
      `http://localhost:8080/productOfferings/page/${page}`,
      options
    );
  }

  getProductById(id: number) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.get<ProductOffering>(
      `http://localhost:8080/productOfferings/${id}`,
      options
    );
  }

  removeProduct(id: number) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.delete(
      `http://localhost:8080/productOfferings/${id}`,
      options
    );
  }

  insertProduct(product: ProductOfferingInsert) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.post<ProductOffering>(
      `http://localhost:8080/productOfferings/`,
      product,
      options
    );
  }

  getProductToSaleQuantity() {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.get<number>(
      `http://localhost:8080/productOfferings/quantity`,
      options
    );
  }
}
