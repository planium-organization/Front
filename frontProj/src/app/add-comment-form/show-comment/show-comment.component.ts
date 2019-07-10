import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css']
})
export class ShowCommentComponent implements OnInit {

  constructor(private data: DataService) { }//comments at data.Comments

  ngOnInit() {
  }

  TimeToString(time: Date)
  {
    let sTime : string = time.getHours() + ':' + time.getMinutes() + '-' 
    + time.getMonth() + '/' + time.getDate() + '/' + time.getFullYear();
    console.log(sTime);
     return sTime;
  }

}
