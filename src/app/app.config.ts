import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          "projectId": "simple-crm-63f54",
          "appId": "1:986504519869:web:fb4329661d95323f74d7d4",
          "storageBucket": "simple-crm-63f54.appspot.com",
          "apiKey": "AIzaSyD643AEWZycFyMP8vLSOLK_koB6B6N-nvc",
          "authDomain": "simple-crm-63f54.firebaseapp.com",
          "messagingSenderId": "986504519869"
        })
      )
    ),
    importProvidersFrom(
      provideFirestore(() => 
      getFirestore())),
       importProvidersFrom(provideStorage(() => 
       getStorage()))]
};
