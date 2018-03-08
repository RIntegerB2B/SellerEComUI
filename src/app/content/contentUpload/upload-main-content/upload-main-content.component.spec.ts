import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMainContentComponent } from './upload-main-content.component';

describe('UploadMainContentComponent', () => {
  let component: UploadMainContentComponent;
  let fixture: ComponentFixture<UploadMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
