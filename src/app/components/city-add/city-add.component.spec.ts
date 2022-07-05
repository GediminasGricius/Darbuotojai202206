import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAddComponent } from './city-add.component';

describe('CityAddComponent', () => {
  let component: CityAddComponent;
  let fixture: ComponentFixture<CityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityAddComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
