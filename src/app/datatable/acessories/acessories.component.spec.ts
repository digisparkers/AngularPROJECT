import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoriesComponent } from './acessories.component';

describe('AcessoriesComponent', () => {
  let component: AcessoriesComponent;
  let fixture: ComponentFixture<AcessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
