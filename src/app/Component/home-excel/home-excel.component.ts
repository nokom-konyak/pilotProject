import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Service/api-service.service';
import { Course_Excel } from 'src/app/course_Excel';

@Component({
  selector: 'app-home-excel',
  templateUrl: './home-excel.component.html',
  styleUrls: ['./home-excel.component.css']
})
export class HomeExcelComponent implements OnInit {
  AllCourses!:Course_Excel[];

  constructor(private _apiService:ApiServiceService) { }

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
}
