import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AccountService } from 'app/login-page/login-services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private accountService: AccountService, private data: DataService) { }

  ngOnInit() {
  }

  logout() {
    this.accountService.logout().subscribe(_ => {
      this.data.user.loggedin = false;
    }, (errorResponse: HttpErrorResponse) => {
    });
  }


}
