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
  public employeesDisplay:Employee[]=[];
  public filterGender:number=0;

  constructor(private employeeService:EmployeeService) { }


  private filterEmpoyees(){
    this.employeesDisplay=[];
    this.employees.forEach((e)=>{
      if (this.filterGender==0) this.employeesDisplay.push(e);
      if (this.filterGender==1 && e.gender=="male") this.employeesDisplay.push(e);
      if (this.filterGender==2 && e.gender=="female") this.employeesDisplay.push(e);
    })
  }

  private getEmployees(){
    this.employeeService.getEmployees().subscribe((response)=>{
      console.log(response);
      this.employees=response;
      this.filterEmpoyees();
    })
  }

  ngOnInit(): void {
    this.getEmployees();
    this.employeeService.onEmployeesUpdated.subscribe(()=>{
      this.getEmployees();
    })
  }

  public filter(){
    this.filterEmpoyees();
  }



}
