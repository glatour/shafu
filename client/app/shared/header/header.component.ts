import { Component } from '@angular/core';
import { AppLogo } from './app-logo.component';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    directives: [ AppLogo ]
})
export class Header { }