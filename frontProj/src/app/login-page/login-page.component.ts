import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './login-services/user.service';
import { AccountService } from './login-services/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email: string = "student@gmail.com";
  @Input() password: string = "student123";

  constructor( private accountService: AccountService, private rout: ActivatedRoute, private router: Router, private data : DataService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm) {
    this.accountService.login(this.email, this.password).subscribe(_ => {
      this.data.user.email = form.value.email;
      this.data.user.password = form.value.password;
      this.data.user.loggedin = true;

    }, (errorResponse: HttpErrorResponse) => {
      
    });
  }



  // getLoggedInUserEmail() {
  //   this.userService.getEmail().subscribe(email => {
  //     this.loggedInUserEmail = `${email}`;
  //     console.log(email)
  //   }, (errorResponse: HttpErrorResponse) => {
  //     this.loggedInUserEmail = `${errorResponse.status} ${errorResponse.statusText}`;
  //     console.log(this.loggedInUserEmail)
  //   });
  // }

}
