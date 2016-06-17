import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Todo } from './Todo';

@Injectable()
export class TodosService {
    private fire: AngularFire; 
    
    constructor(af: AngularFire) {
        this.fire = af;
        // TODO:
        // thi.auth
    }
    
    getAll(): Observable<any[]> {
        return this.fire.list('/');
    }
    
    saveTodo(todo: Todo): void {
        // TODO:
        // this.fire.
    }
}