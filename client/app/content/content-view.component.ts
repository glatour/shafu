import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { Must } from './../shared/models/must';
import { MustsService } from '../shared/services/musters.service';

declare var MediumEditor: any;

@Component( {
  selector: 'content',
  templateUrl: 'content-view.component.html',
  providers: [ MustsService ]
})
export class ContentView {

  must: Must = new Must();
  routeParamsSubscription: Subscription;
  id: Observable<string>;
  @ViewChild( 'titleEditor' ) titleEditor;
  @ViewChild( 'form' ) form;

  constructor( private route: ActivatedRoute, private router: Router, private service: MustsService ) {
    this.id = route.params.map( p => p[ "id" ] );
  }

  ngOnDestroy() {
  }

  ngOnChange() {
  }

  onTitleChanged( $event ) {
    this.must.title = $event.replace( /<[^>]*>/g, "" );
    this.form.controls.title.markAsDirty();
  }

  onContentChanged( $event ) {
    this.must.content = $event;
    this.form.controls.content.markAsDirty();
  }

  onSubmit() {
    this.service
      .save( this.must )
      .subscribe(( must: Must ) => {
        this.must = must;
        this.router.navigate( [ '/' ] );
      });
  }

  ngOnInit() {
    this.id.subscribe( id => {
      this.service
        .getById( id )
        .subscribe( must => {
          this.must = must;
        });
    });
  }
}
