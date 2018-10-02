import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Interfaces
import { YoutubeAPIRequest } from '../interfaces/Iyoutube';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/';
const YOUTUBE_API_KEY = 'AIzaSyC03yZIC1TYRqDYYjLAxFgg2TcTsBzwSeA';
const REGION_CODE = 'CL';
@Injectable()
export class YoutubeProvider {



  constructor(public http: HttpClient) {

  }

//Categorias
//https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=CL&key=AIzaSyC03yZIC1TYRqDYYjLAxFgg2TcTsBzwSeA
  public fetchCategories(): Promise<YoutubeAPIRequest>{
    return this.http.get(`${YOUTUBE_API_URL}videoCategories?part=snippet&regionCode=${REGION_CODE}&key=${YOUTUBE_API_KEY}`)
    .toPromise()
    .then((response: YoutubeAPIRequest) => {
      return response;
    });
  }

  //Buscar por una categoria especifica
  //https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=24&key=AIzaSyC03yZIC1TYRqDYYjLAxFgg2TcTsBzwSeA&maxResults=10&type=video
  public searchVideos(categoryId: number = 1): Promise<YoutubeAPIRequest> {
    return this.http.get(`${YOUTUBE_API_URL}search?part=snippet&videoCategoryId=${categoryId}&key=${YOUTUBE_API_KEY}&maxResults=10&type=video`)
    .toPromise()
    .then((response: YoutubeAPIRequest) => {
      return response;
    });
  }

  //Mostar videos populares
  //https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyC03yZIC1TYRqDYYjLAxFgg2TcTsBzwSeA&regionCode=CL
  public searchTrandingVideos(categoryId: number = 1): Promise<YoutubeAPIRequest> {
    return this.http.get(`${YOUTUBE_API_URL}videos?part=snippet&chart=mostPopular&key=${YOUTUBE_API_KEY}&regionCode=${REGION_CODE}`)
    .toPromise()
    .then((response: YoutubeAPIRequest) => {
      return response;
    });
  }


//CHANNEL especifico 
  //https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=UCrreHSUa5rnuCVDeO8dX4eA&key=AIzaSyC03yZIC1TYRqDYYjLAxFgg2TcTsBzwSeA&maxResults=50&type=video
  public searchChannelVideos(): Promise<YoutubeAPIRequest> {
    return this.http.get(`${YOUTUBE_API_URL}activities?part=snippet,contentDetails&channelId=UCrreHSUa5rnuCVDeO8dX4eA&key=${YOUTUBE_API_KEY}&maxResults=50&type=video`)
    .toPromise()
    .then((response: YoutubeAPIRequest) => {
      return response;
    });
  }

  //buscar por texto ordenado de mayor a menor por fecha
  //https://www.googleapis.com/youtube/v3/search?part=snippet&q=pepa&key=AIzaSyC03yZIC1TYRqDYYjLAxFgg2TcTsBzwSeA&order=date&maxResults=10&type=video
  public searchTextVideos(): Promise<YoutubeAPIRequest> {
    return this.http.get(`${YOUTUBE_API_URL}search?part=snippet&q=dragon ball&key=${YOUTUBE_API_KEY}&&regionCode=${REGION_CODE}&order=date&maxResults=10&type=video`)
    .toPromise()
    .then((response: YoutubeAPIRequest) => {
      return response;
    });
  }

  //Transmisiones en live (upcoming=proximas a trasmitir - completed=trasnmisiones completadas) 
  //https://www.googleapis.com/youtube/v3/search?part=snippet&q=pepa&key=AIzaSyC03yZIC1TYRqDYYjLAxFgg2TcTsBzwSeA&order=date&eventType=live&maxResults=10&type=video
  public searchLiveVideos(): Promise<YoutubeAPIRequest> {
    return this.http.get(`${YOUTUBE_API_URL}search?part=snippet&q=pepa&key=${YOUTUBE_API_KEY}&order=date&eventType=live&maxResults=10&type=video`)
    .toPromise()
    .then((response: YoutubeAPIRequest) => {
      return response;
    });
  }

  //PlaylistItems
  //https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=PLXnIohISHNIuUmbU9k5iM55KZvRZ8u4X4&key=AIzaSyC03yZIC1TYRqDYYjLAxFgg2TcTsBzwSeA
  public searchPlaylistItemVideos(playlistItems:string): Promise<YoutubeAPIRequest> {
    return this.http.get(`${YOUTUBE_API_URL}playlistItems?part=snippet&maxResults=50&playlistId=${playlistItems}&key=${YOUTUBE_API_KEY}`)
    .toPromise()
    .then((response: YoutubeAPIRequest) => {
      return response;
    });
  }


}
