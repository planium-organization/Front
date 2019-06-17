import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { CardModel } from '../table/day/card/card.model';
import { NgForm } from '@angular/forms';
import TimeSpan from 'typescript-dotnet-umd/System/Time/TimeSpan';

@Component({
  selector: 'app-edit-card-form',
  templateUrl: './edit-card-form.component.html',
  styleUrls: ['./edit-card-form.component.css']
})
export class EditCardFormComponent implements OnInit {

  constructor(private data: DataService) { }

  @ViewChild('EditForm') form:NgForm;
  courses = this.data.courses;
  card : CardModel;
  ngOnInit() {
    this.card = this.data.selectedCard;
    this.form.setValue({
      CourseList: this.card.lesson.title,
      StartTimeHour: this.card.startTime.getHours(),
      StartTimeMin: this.card.startTime.getMinutes(),
      DurationHour: this.card.duration.Hours,
      DurationMin: this.card.duration.Minutes,
      Description: this.card.description,
      done: this.card.isDone,
      editable: this.card.editable,
      expired: this.card.expired,
      supervisorCreated: this.card.supervisorCreated,
    })
  }

  onDelete()
  {
    
  }
  onCansel()
  {

  }

  onSubmit()
  {
    
  }

  dateToString()
  {
    const date : string = this.card.dueDate.getFullYear() + '-' + this.card.dueDate.getMonth() + '-' + this.card.dueDate.getDate();
    return date;
  }
}
