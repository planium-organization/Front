import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from './card.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() Card: CardModel;
  @Input() classid: string;
  @Input() studentId: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSelect()//Show detail
  {
    this.dataService.cardSelected.emit({classId: this.classid, studentId: this.studentId, card: this.Card});
  }
}
