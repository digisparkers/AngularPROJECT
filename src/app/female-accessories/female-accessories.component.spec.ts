import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleAccessoriesComponent } from './female-accessories.component';

describe('FemaleAccessoriesComponent', () => {
  let component: FemaleAccessoriesComponent;
  let fixture: ComponentFixture<FemaleAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemaleAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
