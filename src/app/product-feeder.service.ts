import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product_tile_box } from 'src/app/product_tile-view';
import { Pictograms } from 'src/app/product_tile-view';
import { TILES_SMALL } from 'src/app/mock-tiles'
import { CollectionTileView } from 'src/app/tille_collection_view';
import { COLLECTION_SMALL } from 'src/app/mock_colection'


@Injectable({
  providedIn: 'root'
})
export class ProductFeederService {

  getAll_boxTiles():  Observable<Product_tile_box[]>{
    return of(TILES_SMALL);
  }

  getBoxTileByID(id:number): Observable<Product_tile_box>{
      return of(TILES_SMALL[id]);
  }

  getAll_boxCollection(): Observable<CollectionTileView[]>{
      return of(COLLECTION_SMALL);
  }


 getBoxCollectionView(id:number): Observable<CollectionTileView>{
      return of(COLLECTION_SMALL[id]);
 }

  constructor() { }
}
