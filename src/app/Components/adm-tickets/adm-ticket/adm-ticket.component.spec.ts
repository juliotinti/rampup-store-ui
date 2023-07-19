import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTicketComponent } from './adm-ticket.component';

describe('AdmTicketComponent', () => {
  let component: AdmTicketComponent;
  let fixture: ComponentFixture<AdmTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
