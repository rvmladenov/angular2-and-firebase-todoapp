import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2AndFirebaseTodoappAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2AndFirebaseTodoappAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://todoapp-58f20.firebaseio.com')
]);
