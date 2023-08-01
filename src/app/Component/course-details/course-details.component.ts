import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Course } from 'src/app/Course';
import { Employee } from 'src/app/EmployeeData';
import { ApiServiceService } from 'src/app/Service/api-service.service';
import { Registration } from 'src/app/NewRegistration';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  isValidUser: boolean = false;
  Regis_Status: string = ""
  email: string = "";
  ID: any = -1;
  Course!: Course;
  EmployeeData!: Employee;
  newUserRegister!: Registration;
  constructor(private _router: Router, private _apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.ID = sessionStorage.getItem('ID');
    if (!this.ID) {
      alert("Don't try to bypass the Home page!!!");
      this._router.navigate(["/Home"]);
    }
    else {
      console.log(this.ID);
      this.getCourseDetailsByID();
    }
  }

  getCourseDetailsByID() {
    this._apiService.ShowCourseById(this.ID).subscribe({
      next: (res) => {
        this.Course = res;
      },
      error: (e) => {
        alert("No Course Found with ID!!!" + this.ID);
        this._router.navigate(["/Home"]);
      }
    })
  }

  Register(id: any) {
    this.newUserRegister = new Registration();
    this.newUserRegister.courseId = id;
    this.EmployeeData = new Employee();
    this._apiService.GetEmployeeByEmailId(this.email).subscribe({
      next: (res) => {
        
        if (res != null) {
          this.EmployeeData.EmailId = res.emailId;
          this.EmployeeData.EmployeeId = res.employeeId;
          this.EmployeeData.EmployeeName = res.employeeName;
          this.EmployeeData.EmployeeLocation = res.employeeLocation;
          this.EmployeeData.ManagerName = res.managerName;
          this.EmployeeData.MobileNo = res.mobileNo;
          this.isValidUser = true;
          this.newUserRegister.employeeId = res.employeeId;
          this._apiService.Registration(this.newUserRegister).subscribe(r => {
            if (r == true) {
              this.Regis_Status = "Registration Successfull!!!!";
            }
            else {
              this.Regis_Status = "Registration Falied, Already Registerd User !!!";
            }
          })
        }
        else {
          this.isValidUser = false;
          alert("Not a Valid User!!!!");
        }
      },
      error: (e) => {
        alert("Error in fetching Details");
        return;
      }
    })
  }

}
