import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTicketsComponent } from './adm-tickets.component';

describe('AdmTicketsComponent', () => {
  let component: AdmTicketsComponent;
  let fixture: ComponentFixture<AdmTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
