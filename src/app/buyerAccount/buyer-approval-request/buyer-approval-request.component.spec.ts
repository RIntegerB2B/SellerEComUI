import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerApprovalRequestComponent } from './buyer-approval-request.component';

describe('BuyerApprovalRequestComponent', () => {
  let component: BuyerApprovalRequestComponent;
  let fixture: ComponentFixture<BuyerApprovalRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerApprovalRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerApprovalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
