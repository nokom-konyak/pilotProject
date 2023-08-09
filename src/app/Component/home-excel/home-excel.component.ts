import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Service/api-service.service';
import { Course_Excel } from 'src/app/course_Excel';

@Component({
  selector: 'app-home-excel',
  templateUrl: './home-excel.component.html',
  styleUrls: ['./home-excel.component.css']
})
export class HomeExcelComponent implements OnInit {
  AllCourses!:Course_Excel[];
  newUserRegister: any;
  EmployeeData: any;

  constructor(private _apiService:ApiServiceService,private _router:Router) { }

  ngOnInit(): void {
    this.getAllCourseDetails();
  }

  getAllCourseDetails(){
    this._apiService.ShowAllCourseExcel().subscribe({
      next:(res)=>{
        console.log(res);
        this.AllCourses=res;
      },
      error:(e)=>{
        alert("Some Error Occured!!!");
      }
    })
  }

  Register(course:any) {
    sessionStorage.setItem("COURSE",JSON.stringify(course));
    this._router.navigate(['Register_Excel'])
  }
}
