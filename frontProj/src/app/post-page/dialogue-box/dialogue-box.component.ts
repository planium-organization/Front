import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.css']
})
export class DialogueBoxComponent implements OnInit {

  constructor(private data: DataService) { }//posts in data.Posts

  ngOnInit() {
    //this.data.getPosts();
  }

}
