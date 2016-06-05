import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'angular2-and-firebase-todoapp-app',
  templateUrl: 'angular2-and-firebase-todoapp.component.html',
  styleUrls: ['angular2-and-firebase-todoapp.component.css']
})
export class Angular2AndFirebaseTodoappAppComponent {
  title = 'angular2-and-firebase-todoapp works!';
  items: Observable<any[]>;
  
   constructor(af: AngularFire) {
     this.items = af.list('/');
   }
}
