import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empoyee-new',
  templateUrl: './empoyee-new.component.html',
  styleUrls: ['./empoyee-new.component.css']
})
export class EmpoyeeNewComponent implements OnInit {

  public eForm:FormGroup;

  constructor() { 
    this.eForm=new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'surname':new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'gender':new FormControl('male'),
      'email':new FormControl(null, [Validators.email, Validators.required])
    });
  }

  ngOnInit(): void {
    
  }
/*
  uzdraustiVardai(control:FormControl): {[s:string]:boolean}|null{
    if (control.value=="Jonas"){
      return {'vardasNegalimas':true}
    }else{
      return null;
    }
  }
*/
  public newEmployee(){
    console.log(this.eForm);
  }

}
