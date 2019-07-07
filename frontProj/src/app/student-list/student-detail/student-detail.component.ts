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

  constructor(private data : DataService) { }

  ngOnInit() {
  }

  onSelect()//show table
  {
    this.data.studentSelected.emit(this.Student);
  }
}
