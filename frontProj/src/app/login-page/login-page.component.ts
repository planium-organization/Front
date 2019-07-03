import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private cookie : CookieService) { }

  ngOnInit() {

  }

  onSubmit()
  {
    this.cookie.set('id', 'supervisor1');
    console.log(this.cookie.get('id'));
  }
}
