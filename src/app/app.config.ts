import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"da-bubble-ba214","appId":"1:870561361775:web:c678204a520fb2707dc29a","storageBucket":"da-bubble-ba214.appspot.com","apiKey":"AIzaSyAnNCwhxSLpbuP1fr4sqbQI8RejrekJQx0","authDomain":"da-bubble-ba214.firebaseapp.com","messagingSenderId":"870561361775"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideStorage(() => getStorage())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"da-bubble-ba214","appId":"1:870561361775:web:c678204a520fb2707dc29a","storageBucket":"da-bubble-ba214.appspot.com","apiKey":"AIzaSyAnNCwhxSLpbuP1fr4sqbQI8RejrekJQx0","authDomain":"da-bubble-ba214.firebaseapp.com","messagingSenderId":"870561361775"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"dabubble-1d01f","appId":"1:641877335910:web:a2541e80d72930560872a7","storageBucket":"dabubble-1d01f.appspot.com","apiKey":"AIzaSyBe1eu5vot-Bt9jDvR98ldIfTFFNIZagcg","authDomain":"dabubble-1d01f.firebaseapp.com","messagingSenderId":"641877335910"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"dabubble-1d01f","appId":"1:641877335910:web:a2541e80d72930560872a7","storageBucket":"dabubble-1d01f.appspot.com","apiKey":"AIzaSyBe1eu5vot-Bt9jDvR98ldIfTFFNIZagcg","authDomain":"dabubble-1d01f.firebaseapp.com","messagingSenderId":"641877335910"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
