import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/Course';
import { ApiServiceService } from 'src/app/Service/api-service.service';

@Component({
  selector: 'app-insert-course',
  templateUrl: './insert-course.component.html',
  styleUrls: ['./insert-course.component.css']
})
export class InsertCourseComponent implements OnInit {
  image!:any;
  NewCourseForm!:FormGroup;
  imageLoaded:boolean=false;
  constructor(private _apiService:ApiServiceService,private cdr:ChangeDetectorRef) {
   }

  ngOnInit(): void {
    this.NewCourseForm = new FormGroup({
      name:new FormControl(null,Validators.required),
      imgage:new FormControl(null),
      desc:new FormControl(null,Validators.required),
      start:new FormControl(null,Validators.required),
      end:new FormControl(null,Validators.required)
    })
  }

  ImageUpload(event:any)
   {
    var file=event.target.files.length;
    for(let i=0;i<file;i++)
    {
      var reader=new FileReader();
      reader.onload=(event:any)=>
      {
        this.image=event.target.result;
        this.cdr.detectChanges();
      }
      reader.readAsDataURL(event.target.files[i]);
    }
   }
   handleImageLoad()
   {
    this.imageLoaded=true;
   }

   NewCourse():void{
    let C=new Course();
    C.courseName =this.NewCourseForm.value.name;
    C.courseImage=this.image;
    C.courseDesc=this.NewCourseForm.value.desc;
    C.startTime=this.NewCourseForm.value.start;
    C.endTime=this.NewCourseForm.value.end;
    C.course_Registrations=[];
    console.log(C);
    this._apiService.InsertNewCourse(C).subscribe(r=>{
      if(r==true)
      {
        alert("New Course Added");
      }
    })    
   }
}

