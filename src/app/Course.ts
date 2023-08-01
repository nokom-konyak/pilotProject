export class Course{
    courseId!:number;
    courseName!:string;
    courseImage!:string;
    courseDesc!:string;
    startTime!:Date;
    endTime!:Date;
    course_Registrations:any=[];
}