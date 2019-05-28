import { Component, OnInit } from '@angular/core';
import { CardModel } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  Card : CardModel;

  constructor() { }

  ngOnInit() {
  }

}
