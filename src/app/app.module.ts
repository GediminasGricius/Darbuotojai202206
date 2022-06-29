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
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    CityAddComponent,
    EmpoyeeNewComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    EmployeeDetailsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
