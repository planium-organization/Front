import { Component, OnInit } from '@angular/core';
import { StudentModel } from './student.model';
import { DataService } from '../data.service';
import { ClassModel } from '../class-list/class.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  
  Students : StudentModel[]; 
  ClassId : string;
  constructor( private data : DataService,private rout : ActivatedRoute) {}

  ngOnInit() 
  {
    this.rout.paramMap.subscribe(
      params => {
        this.Students = this.data.GetStudents(this.ClassId = params.get('id'))}
    );
    
  }
}
