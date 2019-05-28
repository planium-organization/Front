import { Component, OnInit } from '@angular/core';
import { ClassModel } from '../class.model';
// class item
@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  ClassItem: ClassModel;

  constructor() { }

  ngOnInit() {
  }

}
