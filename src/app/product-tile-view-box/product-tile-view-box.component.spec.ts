import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTileViewBoxComponent } from './product-tile-view-box.component';

describe('ProductTileViewBoxComponent', () => {
  let component: ProductTileViewBoxComponent;
  let fixture: ComponentFixture<ProductTileViewBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTileViewBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTileViewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
