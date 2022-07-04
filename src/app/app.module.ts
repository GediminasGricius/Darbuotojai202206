import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmpoyeeNewComponent } from './components/empoyee-new/empoyee-new.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeItemComponent } from './components/employee-list/employee-item/employee-item.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AboutModule } from './about/about.module';
import { CitiesModule } from './cities/cities.module';


@NgModule({
  declarations: [
    AppComponent,
    EmpoyeeNewComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    EmployeeDetailsComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AboutModule,
    CitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
