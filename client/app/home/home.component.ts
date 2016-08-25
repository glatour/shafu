import { Component, Output } from '@angular/core';
import { Store } from '@ngrx/store/src';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { Observable } from 'rxjs';
import { ContentTileComponent } from '../content/content-tile.component';
import { MustsService } from '../shared/services/musters.service';

interface AppState {
  counter: number;
}

@Component( {
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [ MustsService ],
  styles: [ "h5 {display: inline; }" ],
  directives: [ StoreLogMonitorComponent, ContentTileComponent ]
})
export class Home {
  error = "";
  musts = [];
  counter: Observable<{}>;

  constructor( private service: MustsService, public store: Store<AppState> ) {
     this.counter = store.select('counter');
   }

  ngOnInit() {
    this.getMusts();

    setTimeout(() => {

    this.store.dispatch({type: 'INCREMENT'});
    this.store.dispatch({type: 'INCREMENT'});
    this.store.dispatch({type: 'INCREMENT'});

    }, 1000);
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
