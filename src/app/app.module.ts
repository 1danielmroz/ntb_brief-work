import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductTileViewBoxComponent } from './product-tile-view-box/product-tile-view-box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { GroupSearchComponent } from './group-search/group-search.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { DebuggerComponent } from './debugger/debugger.component';
import { CollectionComponent } from './collection/collection.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { NtbFilterComponent } from './ntb-filter/ntb-filter.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ProductTileViewBoxComponent,
    DashboardComponent,
    FrontPageComponent,
    GroupSearchComponent,
    ProductSliderComponent,
    DebuggerComponent,
    CollectionComponent,
    InspirationComponent,
    AllProductsComponent,
    NtbFilterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
