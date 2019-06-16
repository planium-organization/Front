import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-card-form',
  templateUrl: './edit-card-form.component.html',
  styleUrls: ['./edit-card-form.component.css']
})
export class EditCardFormComponent implements OnInit {

  Date : Date;
  constructor() { }

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
