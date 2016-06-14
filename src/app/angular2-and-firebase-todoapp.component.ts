import { Component, OnInit, OnDestroy } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HeaderMenuComponent } from './shared/menu/header-menu.component';
import { AddComponent } from './+add';
import { EditComponent } from './+edit';
import { ListComponent } from './+list';
import { HomeComponent } from './+home';

@Component({
  moduleId: module.id,
  selector: 'angular2-and-firebase-todoapp-app',
  templateUrl: 'angular2-and-firebase-todoapp.component.html',
  directives: [
    PolymerElement('vaadin-combo-box'),
    PolymerElement('paper-input'),
    PolymerElement('paper-ripple'),
    ROUTER_DIRECTIVES
  ],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/add', component: AddComponent},
  {path: '/edit', component: EditComponent},
  {path: '/list', component: ListComponent},
  {path: '/', component: HomeComponent}
])
export class Angular2AndFirebaseTodoappAppComponent implements OnInit, OnDestroy {
  active:boolean = false;

  ngOnInit(): void {
    this.active = true;
  }
  
  ngOnDestroy(): void {
    this.active = false;
  }
  
}
