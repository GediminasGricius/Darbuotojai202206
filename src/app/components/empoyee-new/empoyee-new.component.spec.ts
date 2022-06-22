import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoyeeNewComponent } from './empoyee-new.component';

describe('EmpoyeeNewComponent', () => {
  let component: EmpoyeeNewComponent;
  let fixture: ComponentFixture<EmpoyeeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpoyeeNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoyeeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
