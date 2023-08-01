import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { CourseDetailsComponent } from './Component/course-details/course-details.component';
import { NewRegistrationComponent } from './Component/new-registration/new-registration.component';
import { PagenotfoundComponent } from './Component/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'Dashboard',pathMatch:'full'},
  {path:'Dashboard',component:DashboardComponent},
  {path:'Home',component:HomeComponent},
  {path:'course-detail',component:CourseDetailsComponent},
  {path:'course-detail/:id',component:CourseDetailsComponent},
  {path:'Registration',component:NewRegistrationComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
