import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Lista } from "../../../interfaces/Iaprendizaje";

import { TextToSpeech } from '@ionic-native/text-to-speech';

@IonicPage()
@Component({
  selector: 'page-numeros',
  templateUrl: 'numeros.html',
})
export class NumerosPage {

  listaSeleccionada:Lista[] = [];
  es:string = '';
  en:string = '';
  titulo:string = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private tts: TextToSpeech) {

                console.log("nombre: "+JSON.stringify(navParams.get('data').nombre));
                console.log("idioma: "+navParams.get('idioma'));
                console.log("lista: "+JSON.stringify(navParams.get('data').lista));
                this.titulo = navParams.get('data').nombre;
                this.listaSeleccionada = navParams.get('data').lista;
                if(navParams.get('idioma') == 'es'){
                  this.es = navParams.get('idioma');
                  this.en = '';
                }
                else{
                  if(navParams.get('idioma') == 'en'){
                    this.en = navParams.get('idioma');
                    this.es = '';
                  }
                }
                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumerosPage');
  }

  vozIngles(voz:string):void {

    const options = {
    	  text: voz,
        locale: 'en-GB',
        rate: 0.85
    }

    this.tts.speak(options)
        .then(() => {
            console.log('Success');
            
        })
        .catch((reason: any) => {
            console.log(reason);
            
        })
  }

  vozEspanol(voz:string):void {

    const options = {
      text: voz,
      locale: 'es-CL',
      rate: 0.85
    }

    this.tts.speak(options)
      .then(() => {
          console.log('Success');
          
      })
      .catch((reason: any) => {
          console.log(reason);
          
    })
  }


}
