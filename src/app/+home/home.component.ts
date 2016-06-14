import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;

  ngOnInit() {
    this.title = 'Angular 2, Firebase and Vaadin TODO app';
  }
}
