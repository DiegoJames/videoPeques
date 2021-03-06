import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { YoutubeProvider } from '../providers/youtube';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { HttpClientModule } from '@angular/common/http';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    File,
    YoutubeProvider,
    YoutubeVideoPlayer,
    TextToSpeech
  ]
})
export class AppModule {}
