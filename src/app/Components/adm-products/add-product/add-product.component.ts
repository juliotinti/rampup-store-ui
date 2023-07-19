import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductOfferingInsert } from 'src/app/Models/productOfferingInsert';
import { ProductOfferingService } from 'src/app/Services/product-offering.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  productOffering: ProductOfferingInsert = {
    productName: '',
    unitPrice: null,
    sellIndicator: true,
    state: 'Active',
  };

  error: string = null;

  constructor(
    private productService: ProductOfferingService,
    private router: Router
  ) {}

  submitForm() {
    this.productService.insertProduct(this.productOffering).subscribe(
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

  onSelect(state: string) {
    this.productOffering.state = state;
  }
}
