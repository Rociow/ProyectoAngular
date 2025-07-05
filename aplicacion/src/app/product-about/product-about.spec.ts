import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAbout } from './product-about';

describe('ProductAbout', () => {
  let component: ProductAbout;
  let fixture: ComponentFixture<ProductAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
