import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2AndFirebaseTodoappAppComponent } from '../app/angular2-and-firebase-todoapp.component';

beforeEachProviders(() => [Angular2AndFirebaseTodoappAppComponent]);

describe('App: Angular2AndFirebaseTodoapp', () => {
  it('should create the app',
      inject([Angular2AndFirebaseTodoappAppComponent], (app: Angular2AndFirebaseTodoappAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-and-firebase-todoapp works!\'',
      inject([Angular2AndFirebaseTodoappAppComponent], (app: Angular2AndFirebaseTodoappAppComponent) => {
    expect(app.title).toEqual('angular2-and-firebase-todoapp works!');
  }));
});
