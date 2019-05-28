import { Component, OnInit } from '@angular/core';
import { DayModel } from './day/day.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  DayColumns: DayModel[];

  constructor() { }

  ngOnInit() {
  }

}
