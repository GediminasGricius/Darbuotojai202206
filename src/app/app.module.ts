import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmpoyeeNewComponent } from './components/empoyee-new/empoyee-new.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CityAddComponent } from './components/city-add/city-add.component';
import { EmployeeItemComponent } from './components/employee-list/employee-item/employee-item.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
 {path:'', component:EmployeeListComponent},
 {path:'employee/:id', component:EmployeeDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpoyeeNewComponent,
    EmployeeListComponent,
    CityAddComponent,
    EmployeeItemComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
