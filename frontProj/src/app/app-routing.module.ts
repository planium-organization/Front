import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassListComponent } from './class-list/class-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TableComponent } from './table/table.component';

const routs : Routes = [
  {path: "Classes", component: ClassListComponent, children : [
    {path: ":id",
      children:[
        {path: '', component: StudentListComponent, pathMatch: 'prefix',
          children : [
            {path: '', component: TableComponent, pathMatch: 'full'},
            {path: ':studentId/TimeTable', component: TableComponent},
          ]},
      ]},
  ]},
  {path : "", redirectTo: "/Classes", pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routs)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
