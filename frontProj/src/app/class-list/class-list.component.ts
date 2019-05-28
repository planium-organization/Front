import { Component, OnInit } from '@angular/core';
import { ClassModel } from './class.model';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  Classes : ClassModel[];
  constructor() { }

  ngOnInit() {
  }

}
