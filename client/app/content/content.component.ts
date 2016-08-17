import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { MustsService } from '../shared/services/musters.service';

@Component({
  selector: 'content',
  templateUrl: 'content.component.html',
  providers: [ MustsService ]
})
export class Content {

  must = {};
  routeParamsSubscription:Subscription;
  id: Observable<string>;

  constructor(private route: ActivatedRoute, private service:MustsService) {
    this.id = route.params.map(p => p["id"]);
  }

  ngOnInit(){
    this.id.subscribe(id => {
      this.service
        .getById(id)
        .subscribe(must => this.must = must);
    });
  }

  ngOnDestroy() {
  }
}
