import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.css']
})
export class DialogueBoxComponent implements OnInit {

  constructor(private data: DataService, private rout: ActivatedRoute) { }//posts in data.Posts

  ngOnInit() {
    this.rout.params.subscribe(
      (param: Params)=> {
        this.data.getPosts();
      }
    )
  }

}
