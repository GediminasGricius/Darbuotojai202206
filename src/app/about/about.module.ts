import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path: '', component:AboutComponent}
]

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)        
  ],
  exports:[
    
  ],
  
})
export class AboutModule { }
