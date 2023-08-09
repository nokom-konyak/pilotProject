import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { CourseDetailsComponent } from './Component/course-details/course-details.component';
import { NewRegistrationComponent } from './Component/new-registration/new-registration.component';
import { PagenotfoundComponent } from './Component/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { HomeExcelComponent } from './Component/home-excel/home-excel.component';
import { RegisterExcelComponent } from './Component/register-excel/register-excel.component';

const routes: Routes = [
  {path:'',redirectTo:'Dashboard',pathMatch:'full'},
  {path:'Dashboard',component:DashboardComponent},
  {path:'Home',component:HomeComponent},
  {path:'course-detail',component:CourseDetailsComponent},
  {path:'course-detail/:id',component:CourseDetailsComponent},
  {path:'Registration',component:NewRegistrationComponent},
  {path:'Home_Excel',component:HomeExcelComponent},
  {path:'Register_Excel',component:RegisterExcelComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
