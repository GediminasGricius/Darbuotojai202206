import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {

  @Input() public employee:Employee|null=null;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public employeeDetails(id?:string){
    if (id!=null){
      this.router.navigate(['employee',id]);
    }
  }

}
