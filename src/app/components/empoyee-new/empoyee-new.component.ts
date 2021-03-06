import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CitiesService } from 'src/app/services/cities.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-empoyee-new',
  templateUrl: './empoyee-new.component.html',
  styleUrls: ['./empoyee-new.component.css'],
  animations:[
    trigger("blokelis",
      [
         state("pirma", style({
          height:'50px'
         })),
         state("antra", style({
           height:'300px'
         })),
         transition('pirma=>antra',[
            animate(1000)
         ]),
         transition('antra=>pirma',[
            animate(1000)
         ])
      ]
    ),

    trigger("mygtukas",
      [
         state("pirma", style({
         // opacity:0
           transform:"translateX(-1000px)"
         })),
         state("antra", style({
         // opacity:1
           transform:"translateX(0px)"
         })),
         transition('* => *',[
            animate(1000)
         ])
      ]
    ),
    trigger("forma",
    [
       state("VALID", style({
          "background-color":"#00ff00"
       })),
       state("INVALID", style({
          "background-color":"#ff0000"
       })),
       state("PENDING", style({
        "background-color":"#0000ff"
        })),
       transition('* => *',[
          animate(1000)
       ])
    ]
  ),
    trigger("telefonas",
    [
      state("in",style({
        'opacity':'1',
        'height':'24px'
      })),
     

      transition("void => *", [
        style({
          'opacity':'0',
          'height':'0px'
          
        }),
        animate(500,style({
          'opacity':'0',
          'height':'24px'
        })),
        animate(500)
      ])
    ])
    
  ]
})
export class EmpoyeeNewComponent implements OnInit {

  public eForm:FormGroup;
  public cities:{city:string}[]=[];
  public busena="pirma";
  public formastate="INVALID";

  public mygtukoBusena="pirma";

  constructor(private employeeService:EmployeeService, private citiesService:CitiesService) { 
    this.eForm=new FormGroup({
      'name': new FormControl(null, [this.uzdraustiVardai, Validators.required]),
      'surname':new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'gender':new FormControl('male'),
      'email':new FormControl(null, [Validators.email, Validators.required], this.emailAvailable()),
      'phones':new FormArray([]),
      'addresses':new FormArray([])
    });
  }

  private getCities(){
    this.citiesService.getCities().subscribe((result)=>{
      this.cities=result;
    });
  }
  ngOnInit(): void {
    this.getCities();
    this.citiesService.citiesUpdated.subscribe(()=>{
      this.getCities();
    });
    this.eForm.statusChanges.subscribe((state)=>{
      this.formastate=state;
      if (state=="INVALID"){
        this.mygtukoBusena="pirma";
      }else{
        this.mygtukoBusena="antra";
      }
      //valid, invalid, pending
    })
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

  public animuoti(){
    if (this.busena=="pirma"){
      this.busena="antra";
    } else {
     
    }
    
  }

  onFocus(){
    this.busena="antra";
  }

  onFocusout(){
    this.busena="pirma";
  }

}
