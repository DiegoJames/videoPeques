import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JuegoAnimalesPage } from './juego-animales';

@NgModule({
  declarations: [
    JuegoAnimalesPage,
  ],
  imports: [
    IonicPageModule.forChild(JuegoAnimalesPage),
  ],
  exports: [
    JuegoAnimalesPage,
  ]
})
export class JuegoAnimalesPageModule {}
