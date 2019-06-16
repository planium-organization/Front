import { Component, OnInit } from '@angular/core';
import { DayModel } from './day/day.model';
import { DataService } from '../data.service';
import { StudentModel } from '../student-list/student.model';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { httpService } from '../http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
 // styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  DayColumns: DayModel[];
  studentId: string;
  ClassId: string;
  private reletiveWeekNumber : number = 0;
  constructor(private data: DataService, private rout : ActivatedRoute, private http : httpService) { }

  ngOnInit() 
  {
    this.studentId = this.data.StudentId;
    this.ClassId = this.data.ClassId;
    this.rout.paramMap.subscribe(
      param=> {
        if(param.has('studentId'))
        {
          this.studentId = param.get('studentId');
          this.data.StudentId = this.studentId;
        }
        if(param.has('id'))
        {
          this.ClassId = param.get('id');
          this.data.ClassId = this.ClassId;
        }
        this.DayColumns = this.data.initTable(this.studentId);
    }
    )
    
    }

  onNextClick()
  {
    this.reletiveWeekNumber++;
    this.DayColumns = this.data.getWeek(this.reletiveWeekNumber);
  }

  onlastClick()
  {
    this.reletiveWeekNumber--;
    this.DayColumns = this.data.getWeek(this.reletiveWeekNumber);
  }

}
