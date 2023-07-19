import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmInfoComponent } from './adm-info.component';

describe('AdmInfoComponent', () => {
  let component: AdmInfoComponent;
  let fixture: ComponentFixture<AdmInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
