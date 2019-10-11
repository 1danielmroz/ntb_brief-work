import { Component, OnInit } from '@angular/core';
//import { ProductTileViewBoxComponent } from '../product-tile-view-box/product-tile-view-box.component';

import {ProductFeederService} from 'src/app/product-feeder.service';
import { Product_tile_box } from 'src/app/product_tile-view';
import { Pictograms } from 'src/app/product_tile-view';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent implements OnInit {

  products:Product_tile_box[]=[];
  numberSliders:number=2;
  

  constructor(private productService:ProductFeederService) { }


  getProductFeed(): void{ //This is Feed data on the website need to be modified later when working with db
    var i;
    for (i = 0; i < 4; i++) {
        this.productService.getBoxTileByID(i).subscribe(Product_tile_box => this.products.push(Product_tile_box));
      }
  }

  ngOnInit() {//on start of the application calling it
    this.getProductFeed();
  }

}
