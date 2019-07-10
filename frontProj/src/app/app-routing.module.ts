
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassListComponent } from './class-list/class-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TableComponent } from './table/table.component';
import { DataService } from './data.service';
import { httpService } from './http.service';
import { TableNavComponent } from './table-nav/table-nav.component';
import { AddCardFormComponent } from './add-card-form/add-card-form.component';
import { EditCardFormComponent } from './edit-card-form/edit-card-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PostPageComponent } from './post-page/post-page.component';

const routs : Routes = [
  {path: "login" , component: LoginPageComponent},
  {path: "Post", component: ClassListComponent, children:[
    {path: ':classId', component: PostPageComponent}
  ]},
  {path: "Classes", component: ClassListComponent, children : [
    {path: ":id",
    children:[
      {path: '', component: StudentListComponent, pathMatch: 'prefix',
      children : [
        //{path: '', component: TableComponent, pathMatch: 'full'},
        {path: ':studentId/TimeTable', component: TableNavComponent, children:[
          {path:'', component: TableComponent},
        ]},
      ]},
    ]},
  ]},
  {path: 'Classes/:id/:studentId/TimeTable/:date/edit-card', component: EditCardFormComponent},
  {path: 'Classes/:id/:studentId/TimeTable/:date/make-card', component: AddCardFormComponent},
  {path : "", redirectTo: "/login", pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routs)],
  exports: [ RouterModule ],

  providers: [
    DataService,
    httpService
  ],
})
export class AppRoutingModule { }
