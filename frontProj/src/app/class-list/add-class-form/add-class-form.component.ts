import { Component, OnInit } from '@angular/core';
import { ClassModel } from '../class.model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-add-class-form',
  templateUrl: './add-class-form.component.html',
  styleUrls: ['./add-class-form.component.css']
})
export class AddClassFormComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    let classitem: ClassModel = new ClassModel('new class', '1', '1', 'farzanegan');
    this.data.addClass(classitem);
  }
}
