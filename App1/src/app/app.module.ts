import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';



const firebaseConfig = {
  apiKey: "AIzaSyD3OA5JjOt4onPeE0ijSnKMkT_oxCEg5CE",
  authDomain: "itcs444-6ddaa.firebaseapp.com",
  projectId: "itcs444-6ddaa",
  storageBucket: "itcs444-6ddaa.appspot.com",
  messagingSenderId: "1067801077494",
  appId: "1:1067801077494:web:47affa1085a39a581daed7",
  measurementId: "G-42SM8B12PP"
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  // initialize angularfire with credentials from the dashboard
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  // Import the AngularFireDatabaseModule to use database
  provideFirestore(() => getFirestore()),
  provideAuth(() => getAuth())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
