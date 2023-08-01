import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  IsCourseShow:boolean=false;

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  showContent(){
    this.IsCourseShow=true;
  }

  removeContent(){
    this.IsCourseShow=false;
  }

  explore(){
    this._router.navigate(['Home']);
  }

}
