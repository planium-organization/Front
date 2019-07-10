import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommentModel } from './comment.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-comment-form',
  templateUrl: './add-comment-form.component.html',
  styleUrls: ['./add-comment-form.component.css']
})
export class AddCommentFormComponent implements OnInit {

  text: string;
  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.getComments();
  }

  onSubmit(form: NgForm)
  {
    console.log(form)
    if(form.valid)
    {
      let comment : CommentModel = new CommentModel('',this.data.date, null, this.text)
      this.data.postCommemt(comment);
      this.text = '';
    }
  }

}
