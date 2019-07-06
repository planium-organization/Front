import { Component, OnInit, Input } from '@angular/core';
import { DayModel } from './day.model';
import { DataService } from '../../../app/data.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() DayColumn: DayModel;
  @Input() studentId: string;
  @Input() ClassId: string;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onClick()//comments
  {
    this.dataService.daySelected.emit(this.DayColumn.date);
  }

  onAddCard()
  {
    console.log('onaddcard');
    this.dataService.date = this.DayColumn.date;
  }

  dateToString()
  {
    const date : string = this.DayColumn.date.getFullYear() + '-' + (this.DayColumn.date.getMonth() + 1) + '-' + this.DayColumn.date.getDate();
    return date;
  }
}
