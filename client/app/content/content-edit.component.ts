import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { MustsService } from '../shared/services/musters.service';
import { ContentFormComponent } from './content-form.component';

@Component({
    selector: 'content-edit',
    templateUrl: 'content-edit.component.html',
    directives: [ ContentFormComponent ],
    providers: [ MustsService ]
})
export class ContentEditComponent { 
  must = {};
  routeParamsSubscription:Subscription;

  constructor(private route: ActivatedRoute, private service:MustsService) { }

  ngOnInit(){
    this.routeParamsSubscription = this.route.params.subscribe( params => {
      this.service
        .getById(+params['id'])
        .subscribe(data => this.must = data);
    });
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }
}