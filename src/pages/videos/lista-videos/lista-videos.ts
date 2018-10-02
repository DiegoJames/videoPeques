import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Plugins
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

// Services
import { Items } from '../../../interfaces/Iyoutube';

@IonicPage()
@Component({
  selector: 'page-lista-videos',
  templateUrl: 'lista-videos.html',
})
export class ListaVideosPage {

  titulo:string = "";
  videos: Items[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public youtube: YoutubeVideoPlayer) {

                console.log(this.navParams.get('datos'));
                this.videos = this.navParams.get('datos').data.items;
                this.titulo = this.navParams.get('datos').titulo;
  }


}
