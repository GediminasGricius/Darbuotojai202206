import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityAddComponent } from '../components/city-add/city-add.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {path:'cityAdd', component:CityAddComponent}
]

@NgModule({
  declarations: [
    CityAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CitiesModule { }
