import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSubContentComponent } from './upload-sub-content.component';

describe('UploadSubContentComponent', () => {
  let component: UploadSubContentComponent;
  let fixture: ComponentFixture<UploadSubContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSubContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSubContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
