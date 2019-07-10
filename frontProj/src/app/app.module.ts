import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassDetailComponent } from './class-list/class-detail/class-detail.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-list/student-detail/student-detail.component';
import { TableComponent } from './table/table.component';
import { DayComponent } from './table/day/day.component';
import { TextInputComponent } from './post-page/text-input/text-input.component';
import { DialogueBoxComponent } from './post-page/dialogue-box/dialogue-box.component';
import { CardComponent } from './table/day/card/card.component';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AddCardFormComponent } from './add-card-form/add-card-form.component';
import { httpService } from './http.service';
import { HttpClient, HttpHandler, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TableNavComponent } from './table-nav/table-nav.component';
import { EditCardFormComponent } from './edit-card-form/edit-card-form.component';
import { AddCommentFormComponent } from './add-comment-form/add-comment-form.component';
import { ShowCommentComponent } from './add-comment-form/show-comment/show-comment.component';
import {FormsModule} from '@angular/forms';
import { AnalysisBarComponent } from './analysis-page/analysis-bar/analysis-bar.component';
import { PieChartComponent } from './analysis-page/pie-chart/pie-chart.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserService } from './login-page/login-services/user.service';
import { WithCredentialsInterceptorService } from './login-page/login-services/with-credentials-interceptor.service';
import { AccountService } from './login-page/login-services/account.service';
import { AddCsrfHeaderInterceptorService } from './login-page/login-services/add-csrf-header-interceptor.service';
import { PostPageComponent } from './post-page/post-page.component';
import { AddClassFormComponent } from './class-list/add-class-form/add-class-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClassListComponent,
    ClassDetailComponent,
    StudentListComponent,
    StudentDetailComponent,
    TableComponent,
    DayComponent,
    TextInputComponent,
    DialogueBoxComponent,
    CardComponent,
    AddCardFormComponent,
    TableNavComponent,
    EditCardFormComponent,
    AddCommentFormComponent,
    ShowCommentComponent,
    AnalysisBarComponent,
    PieChartComponent,
    LoginPageComponent,
    PostPageComponent,
    AddClassFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    DataService,
    httpService,
    HttpClient,
    AccountService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: WithCredentialsInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AddCsrfHeaderInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
