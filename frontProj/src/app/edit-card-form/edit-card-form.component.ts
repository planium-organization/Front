import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { CardModel } from '../table/day/card/card.model';
import { NgForm } from '@angular/forms';
import TimeSpan from 'typescript-dotnet-umd/System/Time/TimeSpan';
import { LessonModel } from '../table/day/card/lesson.model';
import { Duration } from '../Duration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-card-form',
  templateUrl: './edit-card-form.component.html',
  styleUrls: ['./edit-card-form.component.css']
})
export class EditCardFormComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  @ViewChild('EditForm') form:NgForm;
  courses = this.data.courses;
  card : CardModel;
  classId: string;
  studentid: string;
  date: Date
  selectedCourse: LessonModel;
  ngOnInit() 
  {
    this.card = this.data.selectedCard;
    this.classId = this.data.ClassId;
    this.studentid = this.data.StudentId;
    this.date = this.data.date;
  }

  onDelete()
  {
    this.data.deleteCard(this.card.id);
    
  }
  onCansel()
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
    const date : string = this.card.dueDate.getFullYear() + '-' + this.card.dueDate.getMonth() + '-' + this.card.dueDate.getDate();
    return date;
  }
}
