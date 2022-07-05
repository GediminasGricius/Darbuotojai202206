import { Component, OnInit } from '@angular/core';
import { SkaiciuotiService } from 'src/app/services/skaiciuoti.service';

@Component({
  selector: 'app-skaiciuokle',
  templateUrl: './skaiciuokle.component.html',
  styleUrls: ['./skaiciuokle.component.css']
})
export class SkaiciuokleComponent implements OnInit {

  public kaina:number|null=null;
  public darbuotoju:number=0;

  constructor(private skaiciuoti:SkaiciuotiService) { }

  ngOnInit(): void {
    this.darbuotoju=this.skaiciuoti.grazinkDarbuotojuSkaiciu();

  }

  public skaiciuotiPVM():number|null{
    if (this.kaina!=null){
      return this.kaina*1.21;
    }else{
      return null;
    }
  }

}
