import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricitybillCardComponent } from './electricitybill-card.component';

describe('ElectricitybillCardComponent', () => {
  let component: ElectricitybillCardComponent;
  let fixture: ComponentFixture<ElectricitybillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricitybillCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricitybillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
