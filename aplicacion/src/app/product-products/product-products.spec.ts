import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductProducts } from './product-products';

describe('ProductProducts', () => {
  let component: ProductProducts;
  let fixture: ComponentFixture<ProductProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
