import { Component, OnInit, Input } from '@angular/core';

import { Product_tile_box } from 'src/app/product_tile-view';
import { Pictograms } from 'src/app/product_tile-view';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input() product:Product_tile_box;


  constructor() { }

  ngOnInit() {
  }

}
