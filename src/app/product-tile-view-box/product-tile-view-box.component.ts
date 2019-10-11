import { Component, OnInit, Input } from '@angular/core';

import { Product_tile_box } from 'src/app/product_tile-view';
import { Pictograms } from 'src/app/product_tile-view';



@Component({
  selector: 'app-product-tile-view-box',
  templateUrl: './product-tile-view-box.component.html',
  styleUrls: ['./product-tile-view-box.component.css']
})
export class ProductTileViewBoxComponent implements OnInit {
 @Input() product:Product_tile_box;

 selectedProduct:Product_tile_box;

  onSelect(product_:Product_tile_box):void{
    this.selectedProduct=product_;
  }



  constructor() { }

  ngOnInit() {
  }

}
