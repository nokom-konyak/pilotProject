import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Course';
import { ApiServiceService } from 'src/app/Service/api-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image!:any;
  AllCourses!:Course[];

  constructor(private _apiService:ApiServiceService,private sanitizer: DomSanitizer,private _router:Router) { }

  ngOnInit(): void {
    this.getAllCourseDetails();
  }

  getAllCourseDetails(){
    this._apiService.ShowAllCourse().subscribe({
      next:(res)=>{
        console.log(res);
        this.AllCourses=res;
      },
      error:(e)=>{
        alert("Some Error Occured!!!");
      }
    })
  }

  CourseDetails(Id:any){
    sessionStorage.setItem('ID',Id);
    this._router.navigate(["course-detail"]);
  }

}
