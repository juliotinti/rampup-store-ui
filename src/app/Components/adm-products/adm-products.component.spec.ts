import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProductsComponent } from './adm-products.component';

describe('AdmProductsComponent', () => {
  let component: AdmProductsComponent;
  let fixture: ComponentFixture<AdmProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
