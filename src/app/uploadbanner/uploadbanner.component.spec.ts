import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadbannerComponent } from './uploadbanner.component';

describe('UploadbannerComponent', () => {
  let component: UploadbannerComponent;
  let fixture: ComponentFixture<UploadbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
