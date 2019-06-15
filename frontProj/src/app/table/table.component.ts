import { Component, OnInit } from '@angular/core';
import { DayModel } from './day/day.model';
import { DataService } from '../data.service';
import { StudentModel } from '../student-list/student.model';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
 // styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  DayColumns: DayModel[];

  private reletiveWeekNumber : number = 0;
  constructor(private data: DataService, private rout : ActivatedRoute) { }

  ngOnInit() {
    this.rout.paramMap.subscribe(
      (params: ParamMap) => {
        if(params.has('studentId'))
        {
          this.data.initTable(params.get('studentId'));
        }
        else
        {
          this.data.initTable(params.get('studentId'));
        }
      }
    );
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
