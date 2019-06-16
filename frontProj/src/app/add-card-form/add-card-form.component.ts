import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

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
  

  ngOnInit() {
    console.log('oninit1');
    this.classId = this.data.ClassId;
    this.studentid = this.data.StudentId;

  }

  onCancel()
  {
    
  }
  onSubmit()
  {
    
  }

  dateToString()
  {
    const date : string = this.date.getFullYear() + '-' + this.date.getMonth() + '-' + this.date.getDate();
    return date;
  }
}
