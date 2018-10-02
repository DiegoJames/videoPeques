import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';

import { APRENDIZAJE } from "../../data/aprendizaje";

import { Aprendizaje } from '../../interfaces/Iaprendizaje';

@IonicPage()
@Component({
  selector: 'page-aprendizaje',
  templateUrl: 'aprendizaje.html',
})
export class AprendizajePage {

  banderaEspanol:string = "./assets/imgs/spain.png";
  banderaIngles:string = "./assets/imgs/britain.png";
  idioma:string = 'es';
  es:string = 'es';
  en:string = 'en';

  aprendizaje:Aprendizaje[] = [];


  constructor(public navCtrl: NavController, 
        public navParams: NavParams, 
        public menuCtrl: MenuController,
        public alertCtrl: AlertController) {

          this.aprendizaje = APRENDIZAJE.slice(0);
          
  }

  mostrarMenu(){
    this.menuCtrl.toggle();
  }

  iniciar(item:Aprendizaje){
    console.log("Idioma: "+this.idioma);
    
      this.navCtrl.push("NumerosPage", { data: item, idioma: this.idioma });

  }

  check(check:string){
    console.log("check: "+check);
    this.idioma = check;
  }


}
