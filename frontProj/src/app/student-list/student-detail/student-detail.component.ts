import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../student.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  Student : StudentModel;

  constructor() { }

  ngOnInit() {
  }

}
