import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-juego',
  templateUrl: 'juego.html',
})
export class JuegoPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public menuCtrl: MenuController,
              public modalCtrl: ModalController) {
  }

  mostrarMenu(){
    this.menuCtrl.toggle();
  }

  juegoAnimales(){
    this.navCtrl.push('JuegoAnimalesPage');
    //let profileModal = this.modalCtrl.create("JuegoAnimalesPage");
     //profileModal.present();
  }

  
}
