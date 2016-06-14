import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'header-menu',
    templateUrl: 'header-menu.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS] 
})
export class HeaderMenuComponent {
    
    constructor() { }
}