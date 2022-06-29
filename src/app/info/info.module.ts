import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './components/info/info.component';
import { EmpoyeeNewComponent } from '../components/empoyee-new/empoyee-new.component';
import { EmployeeListComponent } from '../components/employee-list/employee-list.component';
import { EmployeeItemComponent } from '../components/employee-list/employee-item/employee-item.component';
import { EmployeeDetailsComponent } from '../components/employee-details/employee-details.component';



@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InfoComponent
  ]
})
export class InfoModule { }
