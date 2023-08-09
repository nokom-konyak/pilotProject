import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { CourseDetailsComponent } from './Component/course-details/course-details.component';
import { NewRegistrationComponent } from './Component/new-registration/new-registration.component';
import { PagenotfoundComponent } from './Component/pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Component/header/header.component';
import { InsertCourseComponent } from './Component/insert-course/insert-course.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { FooterComponent } from './Component/footer/footer.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { HomeExcelComponent } from './Component/home-excel/home-excel.component';
import { RegisterExcelComponent } from './Component/register-excel/register-excel.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseDetailsComponent,
    NewRegistrationComponent,
    PagenotfoundComponent,
    HeaderComponent,
    InsertCourseComponent,
    FooterComponent,
    DashboardComponent,
    HomeExcelComponent,
    RegisterExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
