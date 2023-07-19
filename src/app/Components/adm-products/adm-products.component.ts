import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProductOffering } from 'src/app/Models/productOffering';
import { ProductOfferingService } from 'src/app/Services/product-offering.service';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AddProductComponent } from './add-product/add-product.component';

@Component({
  selector: 'app-adm-products',
  templateUrl: './adm-products.component.html',
  styleUrls: ['./adm-products.component.css'],
})
export class AdmProductsComponent implements OnInit {
  currentPage: number = 0;
  products: ProductOffering[] = [];
  error: string = null;

  constructor(
    private productService: ProductOfferingService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAllProducts(this.currentPage).subscribe(
      (response: any) => {
        this.products = response;
      },
      (response: any) => {
        this.error = response.error.message;
        console.log(this.error);
      }
    );
  }

  displayedColumns: string[] = [
    'id',
    'productName',
    'unitPrice',
    'state',
    'sellIndicator',
    'removeButton',
  ];

  onPaginateChange(event) {
    this.currentPage = event.pageIndex;
    this.getAll();
  }

  addData() {
    const dialogRef = this.dialog.open(AddProductComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log('Add PO closed');
    });
  }

  removeData(id: number) {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Remove PO closed');
    });
  }
}
