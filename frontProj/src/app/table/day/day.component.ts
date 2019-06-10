import { Component, OnInit, Input } from '@angular/core';
import { DayModel } from './day.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() DayColumn: DayModel;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onClick()//comments
  {
    this.dataService.daySelected.emit(this.DayColumn);
  }

  onAddCard()
  {

  }
}
