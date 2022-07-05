import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skaiciuokle',
  templateUrl: './skaiciuokle.component.html',
  styleUrls: ['./skaiciuokle.component.css']
})
export class SkaiciuokleComponent implements OnInit {

  public kaina:number|null=null;

  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuotiPVM():number|null{
    if (this.kaina!=null){
      return this.kaina*1.21;
    }else{
      return null;
    }
  }

}
