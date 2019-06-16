import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-card-form',
  templateUrl: './add-card-form.component.html',
  styleUrls: ['./add-card-form.component.css']
})
export class AddCardFormComponent implements OnInit {

  constructor(private data: DataService) { }

  date: Date;
  classId : string;
  studentid: string;
  

  ngOnInit() {
    this.data.addCardSelected.subscribe(
      (object: {classId: string, studentId: string, date: Date}) => {
        this.classId = object.classId;
        this.studentid = object.studentId;
        this.date = object.date;
      }
    )

  }

  onSubmit()
  {
  }
}
