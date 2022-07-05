import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { EmployeeDetailsComponent } from "./components/employee-details/employee-details.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { EmpoyeeNewComponent } from "./components/empoyee-new/empoyee-new.component";
import { SkaiciuokleComponent } from "./components/skaiciuokle/skaiciuokle.component";
import { CustomPreloadingStrategyService } from "./services/custom-preloading-strategy.service";

const routes:Routes=[
    {path:'', component:EmployeeListComponent},
    {path:'employee/:id', component:EmployeeDetailsComponent},
    {path:'employeeAdd', component:EmpoyeeNewComponent},
    {path:'skaiciuokle', component:SkaiciuokleComponent},
    {   
        path:'about', 
        loadChildren:()=>import('./about/about.module').then(m=>m.AboutModule),
        data:{ uzkrauk:true }
    },
    {path:'cities',loadChildren:()=>import('./cities/cities.module').then(m=>m.CitiesModule)}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}