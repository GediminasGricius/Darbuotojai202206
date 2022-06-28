import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees:Employee[]=[];
  constructor(private employeeService:EmployeeService) { }

  private getEmployees(){
    this.employeeService.getEmployees().subscribe((response)=>{
      console.log(response);
      this.employees=response;
    })
  }

  ngOnInit(): void {
    this.getEmployees();
    this.employeeService.onEmployeesUpdated.subscribe(()=>{
      this.getEmployees();
    })
  }

  public increaseCompletedWorks(id?:string){
    if (id!=null){
      this.employeeService.increaseCompletedWorks(id);
    }
  }

}
