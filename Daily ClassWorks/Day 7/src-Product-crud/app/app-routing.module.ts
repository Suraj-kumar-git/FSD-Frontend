import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  {path:'updateProduct/:id/:name/:price', component: UpdateProductComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'addProduct',component:AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
