import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleItemsComponent } from './female-items.component';

describe('FemaleItemsComponent', () => {
  let component: FemaleItemsComponent;
  let fixture: ComponentFixture<FemaleItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemaleItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
