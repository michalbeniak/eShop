import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeProductsComponent } from './three-products.component';

describe('ThreeProductsComponent', () => {
  let component: ThreeProductsComponent;
  let fixture: ComponentFixture<ThreeProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
