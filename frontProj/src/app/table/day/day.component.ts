import { Component, OnInit } from '@angular/core';
import { DayModel } from './day.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  DayColumn: DayModel;

  constructor() { }

  ngOnInit() {
  }

}
