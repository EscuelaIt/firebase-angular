import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { AngularFireModule } from 'angularfire2';
import { AuthProviders, AuthMethods } from 'angularfire2';
export const FIREBASECONFIG = {
  apiKey: "AIzaSyBfbCSWlceOXo1NKvOC6TFATmDunOlkZeU",
  authDomain: "miwhatit.firebaseapp.com",
  databaseURL: "https://miwhatit.firebaseio.com",
  storageBucket: "miwhatit.appspot.com",
  messagingSenderId: "1048077916191"
};

export const FIREBASEAUTHCONFIG ={
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FIREBASECONFIG, FIREBASEAUTHCONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
