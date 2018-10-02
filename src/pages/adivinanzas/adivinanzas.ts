import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import { ADIVINANZAS } from "../../data/adivinanzas";

import { Adivinanzas } from "../../interfaces/Iadivinanzas";

@IonicPage()
@Component({
  selector: 'page-adivinanzas',
  templateUrl: 'adivinanzas.html',
})
export class AdivinanzasPage {
  @ViewChild(Slides) slides: Slides;

  image:string = './assets/imgs/incognito.png';
  texto:string = '';
  pista:string = '';
  final:boolean = false;
  primero:boolean = true;
  disableBtns = false;
  end = false;
  dificultad:string = 'Baja';
  bloquear:boolean = false;

  dificultades:any[] = [
    {
      nombre: "Baja",
      activo: false
    },
    {
      nombre: "Media",
      activo: false
    },
    {
      nombre: "Alta",
      activo: false
    }
  ]

  adivinanzas:Adivinanzas[] = [];

  random:any = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public menuCtrl: MenuController, 
              private tts: TextToSpeech) {

         this.adivinanzas = ADIVINANZAS.slice(0);

  }
  ngAfterViewInit() {
    //let freeMode = this.slides.freeMode = true;
    //let preventClicksPropagation = this.slides.preventClicksPropagation = false;
    //let effect = this.slides.loop = false;
    
    let lockSwipes = this.slides.lockSwipes(true);
    
    //if(this.slides.controlInverse)
    //let effect = this.slides.effect = 'fade';
    //console.log("freeMode: "+freeMode);
    //console.log("preventClicksPropagation: "+preventClicksPropagation);
    //console.log("effect: "+effect);
    console.log("lockSwipes: "+lockSwipes);

  }

  iniciar(nivel:string = ''){
      var j, x, i;
      for (i = this.adivinanzas.length; i; i--) {
          j = Math.floor(Math.random() * i);
          x = this.adivinanzas[i - 1];
          this.adivinanzas[i - 1] = this.adivinanzas[j];
          this.adivinanzas[j] = x;
      }
      console.log("random: "+ JSON.stringify(this.adivinanzas));

    this.slides.lockSwipes(false);
    console.log("nivel: "+nivel);
    console.log("dificultad: "+this.dificultad);
    if(nivel != ''){
      this.dificultad = nivel;
    }
      
    this.texto = ''; 
    this.pista = '';
    this.primero = false;
    this.final = false;
    this.disableBtns = false;
    this.bloquear = false;
    let indice = this.slides.getActiveIndex();
    console.log("indice: "+indice);
    for(let to in this.adivinanzas){
      console.log("to: "+JSON.stringify(to));
      if(indice == parseInt(to)){
        console.log("descripcion: "+this.adivinanzas[to].description);
        this.slides.slideNext(500, true);
        this.textoToVoz(this.adivinanzas[to].description, false);
        this.slides.lockSwipes(true);
        break;
      }
    }
    
  }

  siguiente(){
    this.slides.lockSwipes(false);
    this.image = './assets/imgs/incognito.png';
    this.texto = '';
    this.pista = '';
    this.primero = false;
    this.final = false;
    this.disableBtns = false;
    let indice = this.slides.getActiveIndex();
    let isEnd = this.slides.isEnd();
    this.bloquear = false;
    console.log("indice: "+indice);
    console.log("isEnd: "+isEnd);
    
    if(this.end){
      this.slides.slideTo(0, 1);
      //this.primero = true;
      this.end = false;
    }else{
      this.slides.slideNext(500, true);
    }
    if(this.slides.isEnd()){
      this.end = true;
    }

    for(let to in this.adivinanzas){
      console.log("to: "+JSON.stringify(to));
      if(indice == parseInt(to)){
        console.log("descripcin: "+this.adivinanzas[to].description);
        this.textoToVoz(this.adivinanzas[to].description, false);
        this.slides.lockSwipes(true);
        break;
      }
    }
    
  }

  anterior(){
    this.slides.lockSwipes(false);
    this.image = './assets/imgs/incognito.png';
    this.texto = '';
    this.pista = '';
    this.final = false;
    this.disableBtns = false;
    this.end = false;
    this.bloquear = false;
    let indice = this.slides.getActiveIndex() - 1;
    
    if(this.primero){
      this.primero = false;
    }else{
      this.slides.slidePrev(500, false);
    }
    if(this.slides.isBeginning()){
      this.primero = true;
    }

    if(indice > 0){
    for(let to in this.adivinanzas){
      
        if((indice - 1) == parseInt(to)){
          console.log("indice: "+indice);
          console.log("to: "+JSON.stringify(to));
          console.log("descripcion: "+this.adivinanzas[to].description);
          this.textoToVoz(this.adivinanzas[to].description, false);
          break;
        }
      }
    }
    this.slides.lockSwipes(true);
  }

  solucion(item:any){
    this.image = item.solucion_image;
    this.texto = item.solucion_title;
    this.pista = '';
    this.textoToVoz(item.solucion_title, true);
  }

  play(item:any){
    if(this.texto == ''){
      this.textoToVoz(item.description, false);
    }
  }

  textoToVoz(voz:string, bloquear):void {

    this.disableBtns = true;
    this.primero = true;
    this.final = true;

    const options = {
    	  text: voz,
        locale: 'es-CL',
        rate: 0.85
    }

    this.tts.speak(options)
        .then(() => {
            console.log('Success');
            if(bloquear){
              this.disableBtns = true;
            }else{
              this.disableBtns = false;
            }
            if(!this.slides.isBeginning()){
              this.primero = false;
            }
              this.final = false;
        })
        .catch((reason: any) => {
            console.log(reason);
            this.disableBtns = false;
              this.primero = false;
              this.final = false;
        })
}

  verPista(item:any){
    if(this.texto == ''){
      this.pista = item.pista_title;
      this.textoToVoz(item.pista_title, false);
    }
    
  }

  esCorrecta(altenativa:any, adivina:any){
    this.disableBtns = true;
    let inCorrecto:boolean = true;

    if(!this.bloquear){
    for(let to of this.adivinanzas){
          if(to.solucion_title == altenativa.nombre){
            console.log('Correcto');
            this.image = adivina.solucion_image; 
            this.texto = altenativa.nombre;
            inCorrecto = false;
            this.textoToVoz(altenativa.nombre+".\n" + altenativa.voz, true);
            break;
          }
      }
      if(inCorrecto){
        console.log('Incorrecto');
        this.disableBtns = false;
        this.bloquear = false;
        this.image = './assets/imgs/incognito.png'; 
        this.textoToVoz(altenativa.nombre+".\n" + altenativa.voz, false);
      }else{
        console.log('Bloqueo');
        this.bloquear = true;
      }
    }
  }

  mostrarMenu(){
    this.menuCtrl.toggle();
  }

}
