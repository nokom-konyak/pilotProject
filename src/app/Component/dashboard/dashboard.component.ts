import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  IsCourseShow:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  showContent(){
    this.IsCourseShow=true;
  }

  removeContent(){
    this.IsCourseShow=false;
  }

}
