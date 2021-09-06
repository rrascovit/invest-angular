import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemInvestmentComponent } from './redeem-investment.component';

describe('RedeemInvestmentComponent', () => {
  let component: RedeemInvestmentComponent;
  let fixture: ComponentFixture<RedeemInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
