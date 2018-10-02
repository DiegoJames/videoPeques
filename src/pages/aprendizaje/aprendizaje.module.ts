import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AprendizajePage } from './aprendizaje';

@NgModule({
  declarations: [
    AprendizajePage,
  ],
  imports: [
    IonicPageModule.forChild(AprendizajePage),
  ],
  exports:[
    AprendizajePage,
  ]
})
export class AprendizajePageModule {}
