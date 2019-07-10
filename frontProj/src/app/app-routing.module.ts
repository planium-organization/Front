
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
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfilePageEditComponent } from './profile-page/profile-page-edit/profile-page-edit.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './login-page/signup-page/signup-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { AddClassFormComponent } from './class-list/add-class-form/add-class-form.component';
import { AddCommentFormComponent } from './add-comment-form/add-comment-form.component';

const routs : Routes = [
  {path: "login" , component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: "Post", component: ClassListComponent, children:[
    {path: ':classId', component: PostPageComponent}
  ]},
  {path: "Classes", component: ClassListComponent, children : [
    {path: 'addClass', component: AddClassFormComponent},
    {path: ":id",
    children:[
      {path: '', component: StudentListComponent, pathMatch: 'prefix',
      children : [
        {path: ':studentId/TimeTable', component: TableNavComponent, children:[
          {path:'', component: TableComponent},
        ]},
      ]},
    ]},
  ]},
  {path: 'Classes/:id/:studentId/TimeTable/:date/edit-card', component: EditCardFormComponent},
  {path: 'Classes/:id/:studentId/TimeTable/:date/make-card', component: AddCardFormComponent},
  {path: 'Profile', component: ProfilePageComponent, pathMatch: 'full'},
  {path: 'Profile/edit', component: ProfilePageEditComponent},
  {path: 'Classes/:id/:studentId/TimeTable/:date/comments', component: AddCommentFormComponent},
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
