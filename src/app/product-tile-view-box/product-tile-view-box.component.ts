import { Component, OnInit, Input } from '@angular/core';

import { Product_tile_box } from 'src/app/product_tile-view';
import { Pictograms } from 'src/app/product_tile-view';



@Component({
  selector: 'app-product-tile-view-box',
  templateUrl: './product-tile-view-box.component.html',
  styleUrls: ['./product-tile-view-box.component.css']
})
export class ProductTileViewBoxComponent implements OnInit {
//@Input() product:Product_tile_box;

 selectedProduct:Product_tile_box;

  onSelect(product_:Product_tile_box):void{
    this.selectedProduct=product_;
  }

  product:Product_tile_box={
    id: 1,
    title: 'Shiny Lines Bianco Ściana Rekt.',
    group_type: 'Wall tiles',
    info:'29.8 x 89.8 cm',
    pictograms: [{url:"https://www.paradyz.com/sites/default/files/plytki-rektyfikowane.png",tooltip:"Rectified tiles"},
      {url:"https://www.paradyz.com/sites/default/files/plytki-scienne.png",tooltip:"Wall tiles"}],
    Pictures: 'https://www.paradyz.com/sites/default/files/styles/skala_270x270/public/Shiny%20Lines%20bianco_298x898.jpg?itok=_GHcCZ_H',
    alt: 'Shiny Lines Bianco Ściana Rekt.  - Biały - 298x898 - Wall tiles - Shiny Lines',
  };

  constructor() { }

  ngOnInit() {
  }

}
