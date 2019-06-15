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
import { TableNavComponent } from './table-nav/table-nav.component';
import { EditCardFormComponent } from './edit-card-form/edit-card-form.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
