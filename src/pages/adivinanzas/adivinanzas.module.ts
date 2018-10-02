import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdivinanzasPage } from './adivinanzas';

@NgModule({
  declarations: [
    AdivinanzasPage,
  ],
  imports: [
    IonicPageModule.forChild(AdivinanzasPage),
  ],
  exports: [
    AdivinanzasPage,
  ]
})
export class AdivinanzasPageModule {}
