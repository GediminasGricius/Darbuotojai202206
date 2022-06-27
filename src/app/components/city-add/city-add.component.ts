import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {
  public city:string="";
  constructor(private citiesService:CitiesService) { }

  ngOnInit(): void {
  }

  public addCity(){
    this.citiesService.addCity(this.city).subscribe(()=>{
      this.city="";
    });

  }

}
