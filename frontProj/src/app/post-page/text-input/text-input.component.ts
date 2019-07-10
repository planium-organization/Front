import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostModel } from '../post.model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  postText
  onSubmit(AddPost: NgForm)
  {
    if(AddPost.valid)
    {
      let post: PostModel = new PostModel('',null,AddPost.value.PostText,null);
      console.log(AddPost.value.PostText)
      this.data.sendPost(post);
      AddPost.value.PostText = '';
      this.postText = '';
    }
  }

}
