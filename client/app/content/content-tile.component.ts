import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Must } from '../../app/shared/models/must';
import { MustsService } from '../../app/shared/services/musters.service';

@Component( {
	selector: 'content-tile',
	templateUrl: 'content-tile.component.html',
	styles: [ require( './content-tile.component.less' ) ]
})
export class ContentTileComponent {
	@Input() must: Must;
	@Output() onDelete = new EventEmitter();

	constructor( private service: MustsService ) { }

	ngOnInit() { }

  delete( id: string ) {
    if ( confirm( 'really delete?' ) ) {
      this.service
        .delete( id )
        .subscribe( data => {
					this.onDelete.emit();
        }, error => console.log( error ) );
    }
    return false;
  }
}