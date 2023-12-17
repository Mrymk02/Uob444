import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCtHmZ1g5i860fbtZzdu1LlnfzsvxxcQmA",
  authDomain: "devdactic-tutorial-8bcdb.firebaseapp.com",
  projectId: "devdactic-tutorial-8bcdb",
  storageBucket: "devdactic-tutorial-8bcdb.appspot.com",
  messagingSenderId: "1052180662129",
  appId: "1:1052180662129:web:a6264ba9b8e01a00ed18d0",
  measurementId: "G-739ET4PDR4"
};

@NgModule({
  declarations: [AppComponent],
  imports: 
  [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    // initialize angularfire with credentials from the dashboard
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // Import the AngularFireDatabaseModule to use database
    provideFirestore(() => getFirestore()),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
