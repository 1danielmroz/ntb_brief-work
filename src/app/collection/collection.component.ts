import { Component, OnInit } from '@angular/core';


import { CollectionTileView } from 'src/app/tille_collection_view';
import {ProductFeederService} from 'src/app/product-feeder.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collections:CollectionTileView[]=[];

  constructor(private productService:ProductFeederService) { }

  ngOnInit() {
    this.getCollectionFeed();
  }



  getCollectionFeed(): void{ //This is Feed data on the website need to be modified later when working with db
    var i;
    for (i = 0; i < 4; i++) {
        this.productService.getBoxCollectionView(i).subscribe(CollectionTileView => this.collections.push(CollectionTileView));
      }
  }

}
