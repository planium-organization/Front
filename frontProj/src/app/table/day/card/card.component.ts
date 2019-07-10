import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from './card.model';
import { DataService } from '../../../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Duration } from '../../../Duration';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() Card: CardModel;
  @Input() classid: string;
  @Input() studentId: string;
  constructor(private dataService: DataService,private router: Router, private rout: ActivatedRoute) { }

  ngOnInit() {
  }

  onSelect()//Show detail
  {
    this.dataService.selectedCard = this.Card;
    this.dataService.ClassId = this.classid;
    this.dataService.StudentId = this.studentId;
    // this.router.navigate([ '/Classes', this.dataService.ClassId, this.dataService.StudentId, 'TimeTable', this.dateToString(), 'edit-card'])
  }
  dateToString()
  {
    const date : string = this.Card.dueDate.getFullYear() + '-' + this.Card.dueDate.getMonth() + '-' + this.Card.dueDate.getDate();
    return date;
  }

  CalculateHeight() : number
  {
    let CardHeight = ((this.Card.duration.Hours * 60) + (this.Card.duration.Minutes)) * 2 ;

    if (CardHeight <= 120 )
    {
      CardHeight = 120;
    }
    console.log(CardHeight);

    return CardHeight;
  }


}
