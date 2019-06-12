import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassListComponent } from './class-list/class-list.component';
import { StudentListComponent } from './student-list/student-list.component';

const routs : Routes = [
  {path: "Classes", component: ClassListComponent},
  {path: "Classes/:id", component: StudentListComponent},
  {path: "Classes/:id", component: ClassListComponent},
  {path : "", redirectTo: "/Classes", pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routs)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
