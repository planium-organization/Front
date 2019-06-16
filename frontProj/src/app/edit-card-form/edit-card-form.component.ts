import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-card-form',
  templateUrl: './edit-card-form.component.html',
  styleUrls: ['./edit-card-form.component.css']
})
export class EditCardFormComponent implements OnInit {

  constructor(private data: DataService) { }
  Date : Date;
  courses = this.data.courses;

  ngOnInit() {
  }

  onCansel()
  {

  }

  onSubmit()
  {
    
  }

  dateToString()
  {
    const date : string = this.Date.getFullYear() + '-' + this.Date.getMonth() + '-' + this.Date.getDate();
    return date;
  }
}
