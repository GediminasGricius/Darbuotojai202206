import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employee:Employee|null=null;
  constructor(private employeeService:EmployeeService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.employee=this.employeeService.getEmployee(id);
  }

  public increaseCompletedWorks(id?:string){
    if (id!=null){
      this.employeeService.increaseCompletedWorks(id);
      this.router.navigate(["/"]);
    }
  }

}
