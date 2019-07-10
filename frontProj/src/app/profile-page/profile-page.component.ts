import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
