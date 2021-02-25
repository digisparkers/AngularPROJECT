import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmetictabelComponent } from './cosmetictabel.component';

describe('CosmetictabelComponent', () => {
  let component: CosmetictabelComponent;
  let fixture: ComponentFixture<CosmetictabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmetictabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmetictabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
