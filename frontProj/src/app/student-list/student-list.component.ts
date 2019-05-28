import { Component, OnInit } from '@angular/core';
import { StudentModel } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  Students : StudentModel[];

  constructor() { }

  ngOnInit() {
  }

}
