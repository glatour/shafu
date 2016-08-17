import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { MustsService } from '../shared/services/musters.service';
import { Must } from '../shared/models/must';
import { ContentFormComponent } from './content-form.component';

@Component({
    selector: 'content-edit',
    templateUrl: 'content-edit.component.html',
    directives: [ ContentFormComponent ],
    providers: [ MustsService ]
})
export class ContentEditComponent { 
  must = {};
  id: Observable<string>;

  constructor(private route:ActivatedRoute, private router:Router, private service:MustsService) {
    this.id = route.params.map(p => p["id"]);
   }

  onSaved(must:Must) {
    this.router.navigate(['/content', must.id]);
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