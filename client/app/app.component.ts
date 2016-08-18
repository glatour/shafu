import { Component } from '@angular/core';

import { Header } from './shared/header/header.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  //styles: [':host {display: block; background: #000;}'],
  //styles: [':host { display: block; background: #000; }'],
  styles: [ require('./app.component.less') ],
  directives:[ Header ]
})
export class AppComponent { }
