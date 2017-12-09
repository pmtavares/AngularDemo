import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{myName}} test for {{name}}</h1>`,
})
export class AppComponent  {

    name = 'Angular';
    myName = 'KKKKk';
}
