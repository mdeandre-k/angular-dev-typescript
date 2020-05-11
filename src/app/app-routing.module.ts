import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChomeComponent } from './chome/chome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {    path: '', component: ChomeComponent},
  {    path: "products/:productId", component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

