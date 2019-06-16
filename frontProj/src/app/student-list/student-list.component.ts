import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { StudentModel } from './student.model';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  
  Students : StudentModel[]; 
  @Input() ClassId : string;
  constructor( private data : DataService, private router: ActivatedRoute) {}

  ngOnInit() 
  {
    this.router.paramMap.subscribe(
      (param) => {
        if(param.has('id'))
        {
          this.ClassId = param.get('id');
          console.log(this.ClassId);
          this.Students = this.data.GetStudents(this.ClassId);
        }
      }
    );

    this.data.classSelected.subscribe(
      (id : string) => {this.ClassId = id;
        console.log(id);
        this.Students = this.data.GetStudents(this.ClassId);
      }
    );

  }
}
