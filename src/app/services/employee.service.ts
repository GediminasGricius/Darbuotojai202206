import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly url=environment.dbUrl;

  public onEmployeesUpdated=new EventEmitter();
  public employees:Employee[]=[];

  constructor(private http:HttpClient, private router:Router) { 

  }

  public addEmployee(employee:Employee){
     return this.http.post(this.url+"employees.json",employee);
  }

  public getEmployees(){
    return this.http.get<{[key:string]:Employee}>(this.url+"employees.json").pipe(
      map((response)=>{
        let employees:Employee[]=[];
        for (let key in response){
          employees.push({...response[key],id:key});
        }
        this.employees=employees;
        return employees;
      })
    )
  }

  public getEmployee(id:string):Employee|null{
    let result:Employee|null=null;
    this.employees.forEach((employee)=>{
      if (employee.id!=null && employee.id==id){
        result=employee;
      }
    });
    if (result==null){
      this.router.navigate(["/"]);
    }
    return result;
  }

  public increaseCompletedWorks(id:string){
    let completedworks=0;
    let a={
      ads:4,
      asd:4
    }
    this.http.get<number>(this.url+"employees/"+id+"/completedworks.json").subscribe((response)=>{
      console.log(response);
      completedworks=response;
      completedworks++;
      this.http.patch(this.url+"employees/"+id+".json",{completedworks:completedworks}).subscribe((respose)=>{
        console.log(respose);
        this.onEmployeesUpdated.emit();
      })
    })
  }

}
