import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"deportesangular","appId":"1:823028737857:web:83aaa233fdefb250ea23c0","storageBucket":"deportesangular.appspot.com","apiKey":"AIzaSyAe80iCe6Rq3FOORjX_ZMuQAJyEQhNHS30","authDomain":"deportesangular.firebaseapp.com","messagingSenderId":"823028737857","measurementId":"G-NN83HSLWYM"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"deportesangular","appId":"1:823028737857:web:83aaa233fdefb250ea23c0","storageBucket":"deportesangular.appspot.com","apiKey":"AIzaSyAe80iCe6Rq3FOORjX_ZMuQAJyEQhNHS30","authDomain":"deportesangular.firebaseapp.com","messagingSenderId":"823028737857","measurementId":"G-NN83HSLWYM"})), provideFirestore(() => getFirestore())]
};
