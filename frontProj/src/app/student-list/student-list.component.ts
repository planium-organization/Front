import { Component, OnInit } from '@angular/core';
import { StudentModel } from './student.model';
import { DataService } from '../data.service';
import { ClassModel } from '../class-list/class.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  Students : StudentModel[]; 

  constructor( private data : DataService) {}

  ngOnInit() 
  {
    this.data.classSelected.subscribe
    (
      (classItem : ClassModel) => 
      {
        this.Students = this.data.GetStudents(classItem.ID);
      }
    );
  }
}
