import { Injectable } from '@angular/core';
import { Must } from './../shared/models/must';
///<reference path='./node_modules/immutable/dist/immutable.d.ts'/>
import { List } from 'immutable';
import { combineReducers } from 'redux';
import { MustsService } from './../shared/services/musters.service';
import { NgRedux } from 'ng2-redux';

export interface IAppState {
	musts?: List<Must>
}

export type IMust = List<Must>;
const MUSTS_INITIAL_STATE: IMust = List<Must>( [] );


@Injectable()
export class MustsActions {
	constructor( private ngRedux: NgRedux<IAppState>, private mustsService: MustsService ) {
	}

	static FETCHING_POSTS: string = "FETCHING_POSTS";
	static FETCH_POSTS: string = "FETCH_POSTS";
	
	fetchPosts() {
		this.ngRedux.dispatch( { type: MustsActions.FETCHING_POSTS });
		this.mustsService.get()
			.subscribe( data => {
				this.ngRedux.dispatch( { type: MustsActions.RECEIVED_POSTS, payload: data });
			});
	}

	static RECEIVED_POSTS: string = "RECEIVED_POSTS";
}

export function mustsReducer( state: IMust = MUSTS_INITIAL_STATE, action: any ) {
	switch ( action.type ) {
		case MustsActions.RECEIVED_POSTS:
			return List<Must>( action.payload );
	}
	return state;
}

export const rootReducer = combineReducers<IAppState>( {
 	musts: mustsReducer
});
