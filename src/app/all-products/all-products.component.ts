import { Component, OnInit } from '@angular/core';

import {ProductFeederService} from 'src/app/product-feeder.service';
import { Product_tile_box } from 'src/app/product_tile-view';
import { Pictograms } from 'src/app/product_tile-view';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products:Product_tile_box[]=[];
  numberOfProducts:number=8; // defalt number for product to be display

  constructor(private productService:ProductFeederService) { }

  getProductFeed(): void{ //This is Feed data on the website need to be modified later when working with db
    var i;
    for (i = 0; i < this.numberOfProducts; i++) {
        this.productService.getBoxTileByID(i).subscribe(Product_tile_box => this.products.push(Product_tile_box));
      }
  }

    onClickMe() {
      if(this.numberOfProducts<208){
      this.numberOfProducts+=8;
      }
      this.products=[];
      this.getProductFeed();
    }


  ngOnInit() {
      this.getProductFeed();
  }

}
