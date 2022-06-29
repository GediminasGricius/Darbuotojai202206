import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CityAddComponent } from "./components/city-add/city-add.component";
import { EmployeeDetailsComponent } from "./components/employee-details/employee-details.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { EmpoyeeNewComponent } from "./components/empoyee-new/empoyee-new.component";

const routes:Routes=[
    {path:'', component:EmployeeListComponent},
    {path:'employee/:id', component:EmployeeDetailsComponent},
    {path:'employeeAdd', component:EmpoyeeNewComponent},
    {path:'cityAdd', component:CityAddComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}