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

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSelect()//Show detail
  {
    this.dataService.cardSelected.emit(this.Card);
  }
}
