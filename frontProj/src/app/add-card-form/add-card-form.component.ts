import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { LessonModel } from '../table/day/card/lesson.model';
import { CardModel } from '../table/day/card/card.model';
import { Duration } from '../Duration';

@Component({
  selector: 'app-add-card-form',
  templateUrl: './add-card-form.component.html',
  styleUrls: ['./add-card-form.component.css']
})
export class AddCardFormComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private rout: ActivatedRoute) { }

  date: Date;
  classId : string;
  studentid: string;
  courses = this.data.courses;

  selectedCourse: LessonModel;

  ngOnInit() {
    console.log('oninit1');
    this.classId = this.data.ClassId;
    this.studentid = this.data.StudentId;
    this.date = this.data.date;
  }

  onCancel()
  {

  }
  onSubmit(form: NgForm)
  {
    if(form.valid)
    {
      console.log("kjglk")
      for(let c of this.courses)
      {
        if(form.value.CourseList== c.title)
        {
          this.selectedCourse = c;
        }
      }
      let duration = new Duration(form.value.DurationHour, form.value.DurationMin);
      let startTime = new Date(0,0,0,form.value.StartTimeHour,form.value.StartTimeMin );
      let card = new CardModel('', duration, this.selectedCourse,form.value.Description,false,true,startTime, this.date,false, true);

      this.data.addCard(card);
      this.router.navigate(['/Classes', this.classId, this.studentid, 'TimeTable']);
    }
  }

  dateToString()
  {
    const date : string = this.date.getMonth() + '-' + this.date.getDate() + '-' + this.date.getFullYear();
    return date;
  }

  // ZeroValidation(duration: Duration)
  // {
  //   return
  // }
}
