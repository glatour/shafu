import { Component, Output } from '@angular/core';

import { ContentTileComponent } from '../content/content-tile.component';
import { MustsService } from '../shared/services/musters.service';

@Component( {
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [ MustsService ],
  styles: [ "h5 {display: inline; }" ],
  directives: [ ContentTileComponent ]
})
export class Home {
  error = "";
  musts = [];

  constructor( private service: MustsService ) { }

  ngOnInit() {
    this.getMusts();
  }

  private getMusts() {
    this.service
      .get()
      .subscribe(
      data => {
        this.musts = data.sort(( p1, p2 ) => p1.title > p2.title );
      },
      error => this.error = error
      );
  }

  delete( id: string ) {
    this.service
      .delete( id )
      .subscribe( data => {
        this.getMusts();
      }, error => this.error = error );
    return false;
  }
}
