import { Component } from '@angular/core';

import { Header } from './shared/header/header.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: ['./app.component.css'],
  directives:[ Header ]
})
export class AppComponent { }
