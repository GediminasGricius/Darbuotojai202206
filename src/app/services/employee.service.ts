import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly url="https://darbuotojaibit-default-rtdb.europe-west1.firebasedatabase.app/";
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
        return employees;
      })
    )
  }

}
