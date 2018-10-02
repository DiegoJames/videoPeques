import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, MenuController } from 'ionic-angular';

// Services
import { YoutubeProvider } from '../../providers/youtube';
import { Items } from '../../interfaces/Iyoutube';


@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

  loader : Loading;
  categories: Items[] = [];
  canales:any=[
    {
    "imagen": "./assets/imgs/pepa.png",
    "titulo": "Peppa Pig",
    "playlistId":"PLB4E1bdzTS-0q70SQvo8dutaOAyAezHnd",
    "live": "ll1lfZPwNQs"
  },
  {
    "imagen" : "./assets/imgs/mashaorso.png",
    "titulo": "Masha y el Oso",
    "playlistId":"PLAf-1Hp6f8s53bg8W3EP7Spyxo9uwU_Ob",
    "musicales":"PLAf-1Hp6f8s5nQ2CzSB22B-MxnwggsPEX",
    "live": ""
  },
  {
    "imagen" : "./assets/imgs/pj_masks.png",
    "titulo": "Pj Masks",
    "playlistId":"PLuVWW_WVh8NBgL4UnyuW9jxiHvh4OgoSf",
    "musicales":"PLq_-jy-QE604nfL4kxFslU2EIfdNHnoXe",
    "live": "FLe0EghO6iI"
  },
  {
    "imagen" : "./assets/imgs/ten_titanes.png",
    "titulo": "Teen Titanes",
    "playlistId":"PLVYS_RrmqvKe7sGjLQwjlwGP0klHCNXBE",
    "live": ""
  },
]
esCapitulos:boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private youtubeProvider: YoutubeProvider,
              public loadingCtrl: LoadingController,
              public menuCtrl: MenuController) {

     console.log("canales; "+this.canales);
     this.esCapitulos=true;

  }

  ionViewWillEnter() {
    
  }

  verCapitulos(){
    this.esCapitulos=true;
  }

  verMusicales(){
    this.esCapitulos=false;
  }

  mostrarMenu(){
    this.menuCtrl.toggle();
  }

  searchPlaylistItemVideos(item:any) {
    
    if(this.esCapitulos){
      this.presentLoading();
    this.youtubeProvider.searchPlaylistItemVideos(item.playlistId)
    .then(data => {
      console.log("searchVideos: "+JSON.stringify(data));
      if(data) {
        let titulo = item.titulo;
        this.navCtrl.push('ListaVideosPage', { datos: { data, titulo } });
        this.loader.dismiss();
      }
    });
  }else
  {
    if(!this.esCapitulos){
      this.presentLoading();
      this.youtubeProvider.searchPlaylistItemVideos(item.musicales)
      .then(data => {
        console.log("searchVideos: "+JSON.stringify(data));
        if(data) {
          let titulo = item.titulo;
          this.navCtrl.push('ListaVideosPage', { datos: { data, titulo } });
          this.loader.dismiss();
        }
      });
    }
  }
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Cargando...",
    });
    this.loader.present();
    
  }


}
