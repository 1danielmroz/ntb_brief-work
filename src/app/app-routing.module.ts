import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AllProductsComponent} from 'src/app/all-products/all-products.component';
import {FrontPageComponent} from 'src/app/front-page/front-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/ntb', pathMatch: 'full' },
  {path:'products', component: AllProductsComponent},
  {path:'ntb', component: FrontPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
