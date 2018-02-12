import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentUploadViewComponent } from './content-upload-view.component';

describe('ContentUploadViewComponent', () => {
  let component: ContentUploadViewComponent;
  let fixture: ComponentFixture<ContentUploadViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentUploadViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentUploadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
