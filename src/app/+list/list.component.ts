import { Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TodosService } from '../shared/services/Todos.service';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent {
  items: Observable<any[]>;

  constructor(todos: TodosService) {
    this.items = todos.getAll();
  }

  toggleElem($event: Event): void {
    $event.srcElement.parentElement.classList.toggle('labelShow');
  }
}
