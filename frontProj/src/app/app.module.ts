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
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { TableNavComponent } from './table-nav/table-nav.component';
import { EditCardFormComponent } from './edit-card-form/edit-card-form.component';
import {FormsModule} from '@angular/forms';
import { AnalysisBarComponent } from './analysis-page/analysis-bar/analysis-bar.component';
import { PieChartComponent } from './analysis-page/pie-chart/pie-chart.component';
import { LoginPageComponent } from './login-page/login-page.component';
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
