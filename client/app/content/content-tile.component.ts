import { Component, Input } from '@angular/core';

import { Must } from '../../app/shared/models/must';

@Component( {
	selector: 'content-tile',
	templateUrl: 'content-tile.component.html',
	styles: [ require( './content-tile.component.less' ) ]
})
export class ContentTileComponent {
	@Input() must: Must;

	constructor() { }

	ngOnInit() { }

}