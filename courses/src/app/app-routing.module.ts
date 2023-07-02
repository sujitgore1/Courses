import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { AboutComponent } from './About/about/about.component';
import { ContactComponent } from './Contact/contact/contact.component';
import { CoursesComponent } from './Courses/courses/courses.component';
import { ErrorComponent } from './Error/error/error.component';
import { DetailsComponent } from './details/details.component';
import { LoginGuard } from './Guards/login.guard';
import { BuyNowComponent } from './Buy Now/buy-now/buy-now.component';
import { BuyNowGuard } from './Guards/buy-now.guard';
import { FormGuard } from './Guards/form.guard';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent,canDeactivate:[FormGuard]},
  // {path:'Courses',component:CoursesComponent, canActivate:[LoginGuard]},
  {path:'Courses',component:CoursesComponent},
  // {path:'Courses/details/:id',component:DetailsComponent},
  {path:'Courses',canActivateChild:[BuyNowGuard],children:[
    {path:'details/:id',component:DetailsComponent},
    {path:'buyNow',component:BuyNowComponent}
  ]},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
