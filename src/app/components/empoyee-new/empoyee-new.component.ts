import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-empoyee-new',
  templateUrl: './empoyee-new.component.html',
  styleUrls: ['./empoyee-new.component.css']
})
export class EmpoyeeNewComponent implements OnInit {

  public eForm:FormGroup;

  constructor(private employeeService:EmployeeService) { 
    this.eForm=new FormGroup({
      'name': new FormControl(null, [this.uzdraustiVardai, Validators.required]),
      'surname':new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'gender':new FormControl('male'),
      'email':new FormControl(null, [Validators.email, Validators.required], this.emailAvailable()),
      'phones':new FormArray([]),
      'addresses':new FormArray([])
    });
  }

  ngOnInit(): void {
    
  }

  uzdraustiVardai(control:AbstractControl): {[s:string]:boolean}|null{
    if (control.value=="Jonas"){
      return {'vardasNegalimas':true}
    }else{
      return null;
    }
  }

  emailAvailable():AsyncValidatorFn{
    return (control:AbstractControl):Observable<ValidationErrors|null>=>{
      return this.employeeService.getEmployees().pipe( map((response)=>{
          let exist=false;
          response.forEach((empoyee)=>{
            if (empoyee.email==control.value){
              exist=true;
            }
          });
          if (exist){
            return {"error":"Toks el. pastas egzistuoja"};
          }else{
            return null;
          }
          
      }))
    }
  }

  public newEmployee(){
    this.employeeService.addEmployee(this.eForm.value).subscribe(()=>{

    });
  }

  public addPhone(){
    const phone=new FormControl(null, Validators.required);
    (<FormArray> this.eForm.get('phones')).push(phone);
  }

  public phones(){
    return (<FormArray> this.eForm.get('phones')).controls;
  }

  public addAddress(){
    const address=new FormGroup({
      city:new FormControl(null,Validators.required),
      street:new FormControl(null, Validators.required)
    });
    (<FormArray> this.eForm.get('addresses')).push(address);
  }

  public addresses(){
    return (<FormArray> this.eForm.get('addresses')).controls;
  }

  public abstractToFormGroup(formGroup:AbstractControl){
    return <FormGroup>formGroup;
  }

  public outError(){
    let control=this.eForm.get('email');
    if (control?.errors!=null){
      return (control.errors['error']);
    }
    return "";
  }

}
