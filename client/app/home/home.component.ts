import { Component, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { NgRedux, select } from 'ng2-redux';

import { ContentTileComponent } from '../content/content-tile.component';
import { MustsService } from '../shared/services/musters.service';
import { Must } from './../shared/models/must';
import { IAppState,  MustsActions } from './../reducers';

@Component( {
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [ MustsService, MustsActions ],
  styles: [ "h5 {display: inline; }" ],
  directives: [ ContentTileComponent ]
})
export class Home {
  error = "";
  musts = [];

  @select() musts$: Observable<Must[]>;

  constructor( private ngRedux: NgRedux<IAppState>, private service: MustsService, private mustActions:MustsActions) { 
  }

  ngOnInit() {
    this.mustActions.fetchPosts();
    //this.ngRedux.dispatch(this.mustActions.fetchPosts());
    //this.ngRedux.dispatch({type: 'RETRIEVE_MUSTS'});
    this.getMusts();

    console.log(this.musts$)
  }

  onDelete() {
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
}
