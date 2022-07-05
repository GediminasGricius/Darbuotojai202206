import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

import { EmployeeListComponent } from './employee-list.component';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ],
      imports:[HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ("turi būti atspausdintas vienas darbuotojas", (async ()=>{
    let employeeService=fixture.debugElement.injector.get(EmployeeService);
    spyOn<EmployeeService, any>(employeeService, 'getEmployees').and.returnValue(
      of([{name:"Jonas", surname:"Jonaitis",gender:"male",email:"jonas@jonas.lt",compleatedworks:10,phones:[],addresses:[]}])
    );
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      let compiled=fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.name').textContent).toContain("Jonas");
    })

  }))
});
