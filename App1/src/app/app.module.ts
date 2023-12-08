import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// Creating a refrence from the Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyD7eBaKRY3G1m1iPRApb9nvGJ1JG84Uh3g",
  authDomain: "tutorial5-e200e.firebaseapp.com",
  projectId: "tutorial5-e200e",
  storageBucket: "tutorial5-e200e.appspot.com",
  messagingSenderId: "1077142784803",
  appId: "1:1077142784803:web:fc437c6fadad770ebbda96",
  measurementId: "G-ET02TDLH2P"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    // Initialize angularfire with credentials from the dashboard
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // Import the AngularFireDatabaseModule to use database
    provideFirestore(() => getFirestore()),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
