import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPaymentHeaderComponent } from './bill-payment-header.component';

describe('BillPaymentHeaderComponent', () => {
  let component: BillPaymentHeaderComponent;
  let fixture: ComponentFixture<BillPaymentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillPaymentHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPaymentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
