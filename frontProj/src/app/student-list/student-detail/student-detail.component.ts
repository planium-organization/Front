import { Component, OnInit, Input } from '@angular/core';
import { StudentModel } from '../student.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() Student : StudentModel;
  @Input() classId: string;
  constructor(private data : DataService) { }

  ngOnInit() {
  }

  onSelect()
  {
    console.log(this.classId);
    this.data.StudentId = this.Student.ID;
    this.data.ClassId = this.classId;
  }
}
