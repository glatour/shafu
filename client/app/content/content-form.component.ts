import { Component } from '@angular/core';

import { MustsService } from '../shared/services/musters.service';
import { Must } from '../shared/models/must';

@Component({
    selector: 'content-form',
    templateUrl: './content-form.component.html',
    providers: [ MustsService ]
})
export class ContentFormComponent {
  must:Must = null;

  constructor(private service:MustsService) {}

  onSubmit() {
    this.service
      .save(this.must)
      .subscribe((must:Must) => this.must = must);
  }
  
  ngOnInit(){
    this.must = new Must('some title', 'some content');
  }
}