import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../Course';
import { Registration } from '../NewRegistration';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _httpClient:HttpClient) { }
  ShowAllCourse():Observable<any>{
    return this._httpClient.get<any>("http://localhost:5093/api/Pilot_Project/GetAllCourse").pipe(
      map((res:any)=>{
        return res;
      })
    )
  }

  ShowCourseById(id:number):Observable<any>{
    return this._httpClient.get<any>("http://localhost:5093/api/Pilot_project/GetCourseById?id="+id).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }

  GetEmployeeByEmailId(email:string):Observable<any>{
    return this._httpClient.get<any>("http://localhost:5093/api/Pilot_Project/GetEmployeeByEmailId?email="+email).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }

  InsertNewCourse(data:Course):Observable<any>{
    return this._httpClient.post<any>("http://localhost:5093/api/Pilot_Project/InsertCourse",data).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }

  Registration(data:Registration):Observable<any>{
    return this._httpClient.post<any>("http://localhost:5093/api/Pilot_Project/NewRegistration",data).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }
}
