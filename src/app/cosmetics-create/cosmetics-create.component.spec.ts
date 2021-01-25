import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticsCreateComponent } from './cosmetics-create.component';

describe('CosmeticsCreateComponent', () => {
  let component: CosmeticsCreateComponent;
  let fixture: ComponentFixture<CosmeticsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
