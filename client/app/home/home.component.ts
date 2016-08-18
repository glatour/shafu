import { Component, Output } from '@angular/core';

import { MustsService } from '../shared/services/musters.service';

@Component( {
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [ MustsService ],
  styles: [ "h5 {display: inline; }" ]
})
export class Home {
  error = "";
  musts = [];

  constructor( private service: MustsService ) { }

  ngOnInit() {
    this.service
      .get()
      .subscribe(
      data => {
        this.musts = data.sort(( p1, p2 ) => p1.title > p2.title );
      },
      error => this.error = error
      );
  }
}
