import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './products/products.module';

// Este es el modulo de rutas principal
// Realizamos el cargue perezoso de products-routing
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import( './products/products.module').then( m => m.ProductsModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
