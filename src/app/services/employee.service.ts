import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly url="https://darbuotojaibit-default-rtdb.europe-west1.firebasedatabase.app/";

  public onEmployeesUpdated=new EventEmitter();
  public employees:Employee[]=[];

  constructor(private http:HttpClient) { 

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
    return result;
  }

  public increaseCompletedWorks(id:string){
    let completedworks=0;
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
