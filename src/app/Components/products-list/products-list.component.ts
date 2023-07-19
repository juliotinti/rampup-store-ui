import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductOffering } from 'src/app/Models/productOffering';
import { ProductOfferingService } from 'src/app/Services/product-offering.service';
import { AddProductToShoppingComponent } from './add-product-to-shopping/add-product-to-shopping.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  currentPage: number = 0;
  productOfferings: ProductOffering[] = [];

  constructor(private productOfferingService: ProductOfferingService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productOfferingService
      .getAllProducts(this.currentPage)
      .subscribe((response: any) => {
        this.productOfferings = response;
      });
  }

  onPaginateChange(event) {
    this.currentPage = event.pageIndex;
    this.getAll();
  }
}
