import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



// Components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';



// Modules
// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';



// Firebase Config
var config = {
  apiKey: "AIzaSyAdQmmb_lDpk6W64lvLZz2sRKSgrjBFFmw",
  authDomain: "ionic-chat-app-940ef.firebaseapp.com",
  databaseURL: "https://ionic-chat-app-940ef.firebaseio.com",
  projectId: "ionic-chat-app-940ef",
  storageBucket: "ionic-chat-app-940ef.appspot.com",
  messagingSenderId: "28267414809"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    // Firebase
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
