import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommentModel } from './comment.model';

@Component({
  selector: 'app-add-comment-form',
  templateUrl: './add-comment-form.component.html',
  styleUrls: ['./add-comment-form.component.css']
})
export class AddCommentFormComponent implements OnInit {

  text: string;
  constructor(private data : DataService) { }

  ngOnInit() {
    //this.data.getComments();
  }

  onSubmit()
  {
    let comment : CommentModel = new CommentModel('',this.data.date, null, 'a test text for comment')
    this.data.postCommemt(comment);
  }

}
