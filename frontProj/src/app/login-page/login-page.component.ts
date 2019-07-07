import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './login-services/user.service';
import { AccountService } from './login-services/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  registerFeedback: string = '';
  loginFeedback: string = '';
  loggedInUserEmail: string = '';
  @Input() email: string = "student@gmail.com";
  @Input() password: string = "student123";

  constructor( private accountService: AccountService, private userService: UserService, private data : DataService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginFeedback = '';
    this.accountService.login(this.email, this.password).subscribe(_ => {
      this.loginFeedback = 'Login successful. Try the requests that requires user to be logged in.';
      this.data.user.email = this.email;
      this.data.user.password = this.password;
      this.data.user.loggedin = true;
    }, (errorResponse: HttpErrorResponse) => {
      this.loginFeedback = errorResponse.message;
      console.log(this.loginFeedback)
    });
  }



  getLoggedInUserEmail() {
    this.userService.getEmail().subscribe(email => {
      this.loggedInUserEmail = `${email}`;
      console.log(email)
    }, (errorResponse: HttpErrorResponse) => {
      this.loggedInUserEmail = `${errorResponse.status} ${errorResponse.statusText}`;
      console.log(this.loggedInUserEmail)
    });
  }

}
