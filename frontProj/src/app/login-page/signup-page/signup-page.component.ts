import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../login-services/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private accountService: AccountService,private rout: ActivatedRoute, private data : DataService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm)
  {
    if(form.valid)
    {
      this.accountService.register(form.value.email, form.value.password).subscribe(_ => {

      }, (errorResponse: HttpErrorResponse) => {
      });
    }
  }
}
