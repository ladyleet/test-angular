import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TestAngularAppComponent } from '../app/test-angular.component';

beforeEachProviders(() => [TestAngularAppComponent]);

describe('App: TestAngular', () => {
  it('should create the app',
      inject([TestAngularAppComponent], (app: TestAngularAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'test-angular works!\'',
      inject([TestAngularAppComponent], (app: TestAngularAppComponent) => {
    expect(app.title).toEqual('test-angular works!');
  }));
});
