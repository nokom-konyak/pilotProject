import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/EmployeeData';
import { Registration } from 'src/app/NewRegistration';
import { ApiServiceService } from 'src/app/Service/api-service.service';
import { Course_Excel } from 'src/app/course_Excel';

@Component({
  selector: 'app-register-excel',
  templateUrl: './register-excel.component.html',
  styleUrls: ['./register-excel.component.css']
})
export class RegisterExcelComponent implements OnInit {
  course!:any;
  emp!:Employee;
  email!:string;
  newUserRegister: any;
  EmployeeData!:Employee;
  isValidUser!: boolean;
  Regis_Status!: string;

  constructor(private _apiService:ApiServiceService) { }

  ngOnInit(): void {
    const c =sessionStorage.getItem('COURSE');
    if(c!=null)
    {
      this.course=JSON.parse(c);
    }
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
