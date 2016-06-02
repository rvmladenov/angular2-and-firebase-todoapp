import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2AndFirebaseTodoappAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2AndFirebaseTodoappAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://<your-firebase-app>.firebaseio.com')
]);
