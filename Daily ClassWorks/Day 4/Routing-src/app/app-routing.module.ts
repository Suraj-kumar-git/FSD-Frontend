import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'}, //This we are using to redirect to some page if some error has occured.
  {path:'home',component: HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus/:username',component:ContactusComponent},
  {path:'payment/:amount',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
