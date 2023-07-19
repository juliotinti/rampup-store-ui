import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductOfferingService } from 'src/app/Services/product-offering.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent {
  error: string = null;

  constructor(
    private router: Router,
    private productService: ProductOfferingService,
    @Inject(MAT_DIALOG_DATA) public productOfferingId: any,
    public dialogRef: MatDialogRef<DeleteProductComponent>
  ) {}

  deleteProduct() {
    this.productService.removeProduct(this.productOfferingId.id).subscribe(
      () => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => this.router.navigate(['admin/products']));
      },
      (response: any) => {
        this.error = response.error.message;
        console.log(this.error);
      }
    );
  }
}
