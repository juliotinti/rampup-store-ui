import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductToShoppingComponent } from './add-product-to-shopping.component';

describe('AddProductToShoppingComponent', () => {
  let component: AddProductToShoppingComponent;
  let fixture: ComponentFixture<AddProductToShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductToShoppingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductToShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
