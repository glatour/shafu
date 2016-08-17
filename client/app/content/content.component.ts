import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { MustsService } from '../shared/services/musters.service';

@Component({
  selector: 'content',
  templateUrl: 'content.component.html',
  providers: [ MustsService ]
})
export class Content {

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
