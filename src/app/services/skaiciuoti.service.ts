import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkaiciuotiService {

  constructor() { }

  public grazinkDarbuotojuSkaiciu():number{
    return 70;
  }
}
