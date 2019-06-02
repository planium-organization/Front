import { Component, OnInit } from '@angular/core';
import { ClassModel } from './class.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  Classes: ClassModel[];
  constructor(private data : DataService ) { }

  ngOnInit() {
    this.Classes = this.data.GetClasses();
  }

}
