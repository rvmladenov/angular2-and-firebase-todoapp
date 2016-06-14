import { Component} from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent {
  items: Observable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.list('/');
  }
}
