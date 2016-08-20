import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'filters',
	templateUrl: './filters.component.html',
	styles: [ require('./filters.component.less')]
})
export class FiltersComponent {
	search:string = "qu'est-ce tu veux rechercher?";

	ngOnChange(){
		console.log(arguments);
	}

	searchChanged($event) {
		console.log($event);
	}
}