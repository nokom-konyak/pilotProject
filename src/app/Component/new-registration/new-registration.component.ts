import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/Course';
import { ApiServiceService } from 'src/app/Service/api-service.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {

  ID:any=-1;
  Course!:Course;
  constructor(private _router:Router,private _apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.ID=sessionStorage.getItem('ID');
    if(!this.ID)
    {
      alert("Don't try to bypass the Home page!!!");
      this._router.navigate(["/Home"]);
    }
    else{
      console.log(this.ID);
      this.getCourseDetailsByID();
    }
  }

  getCourseDetailsByID(){
    this._apiService.ShowCourseById(this.ID).subscribe({
      next:(res)=>{
        console.log("Course Details")
        console.log(res);
        this.Course=res;
      },
      error:(e)=>{
        alert("No Course Found with ID!!!"+this.ID);
        this._router.navigate(["/Home"]);
      }
    })
  }

  Register(id:any){
    sessionStorage.setItem('CourseId',id);
    this._router.navigate(["Registration"]);

  }
  // mobileNumber: string = '';
  // scannedMobileNumber: string | null = null;

  // onScanSuccess(result: string) {
  //   this.scannedMobileNumber = result;
  // }

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'www.youtube.com';

}
