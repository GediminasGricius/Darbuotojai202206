import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employee:Employee|null=null;
  constructor(private employeeService:EmployeeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.employee=this.employeeService.getEmployee(id);
  }

}
