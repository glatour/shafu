import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { MustsService } from '../shared/services/musters.service';

declare var MediumEditor: any;
//console.log(MediumEditor);


@Component( {
  selector: 'content',
  templateUrl: 'content-view.component.html',
  providers: [ MustsService ]
})
export class ContentView {

  must = {};
  routeParamsSubscription: Subscription;
  id: Observable<string>;
  @ViewChild( 'mustContent' ) mustContent;

  constructor( private route: ActivatedRoute, private service: MustsService ) {
    this.id = route.params.map( p => p[ "id" ] );
  }

  ngOnDestroy() {
    //var MediumEditor: any;
    //console.log( MediumEditor );
  }

  ngOnInit() {
    this.id.subscribe( id => {
      this.service
        .getById( id )
        .subscribe( must => {
          this.must = must;
          var editor = new MediumEditor( '#' + this.mustContent.nativeElement.id, {
            toolbar: true
          });
          editor.subscribe( 'editableInput', function ( event, editable ) {
          });
        });
    });
  }
}
