import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleHairComponent } from './female-hair.component';

describe('FemaleHairComponent', () => {
  let component: FemaleHairComponent;
  let fixture: ComponentFixture<FemaleHairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemaleHairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleHairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
