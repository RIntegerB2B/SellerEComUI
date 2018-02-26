import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerApprovedComponent } from './buyer-approved.component';

describe('BuyerApprovedComponent', () => {
  let component: BuyerApprovedComponent;
  let fixture: ComponentFixture<BuyerApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
