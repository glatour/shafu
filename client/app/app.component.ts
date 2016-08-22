import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { createStore, applyMiddleware, compose, StoreEnhancerStoreCreator, Store } from 'redux';
var thunk = require( 'redux-thunk' ).default
const createLogger = require( 'redux-logger' );
import { IAppState, rootReducer } from './reducers';

import { Header } from './shared/components/header/header.component';

@Component( {
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [ require( './app.component.less' ) ],
  directives: [ Header ]
})
export class AppComponent {
  constructor( private ngRedux: NgRedux<IAppState> ) {

    // let store: Store<IAppState> = createStore(
    //   rootReducer,
    //   compose( applyMiddleware( thunk, createLogger ) ) );
    // this.ngRedux.provideStore( store );
    this.ngRedux.configureStore( rootReducer, {}, [ createLogger() ] );
  }
}
