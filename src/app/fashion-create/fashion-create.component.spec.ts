import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionCreateComponent } from './fashion-create.component';

describe('FashionCreateComponent', () => {
  let component: FashionCreateComponent;
  let fixture: ComponentFixture<FashionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
