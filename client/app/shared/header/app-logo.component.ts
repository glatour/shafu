import { Component } from "@angular/core";

@Component({
    selector: 'app-logo',
    templateUrl: './app-logo.component.html',
    styles: [':host svg {height:100px; width: 400px;}']
})
export class AppLogo { }