import { Component } from '@angular/core';
import { Router }   from '@angular/router';

import { ContentFormComponent } from './content-form.component';

import { Must } from '../shared/models/must';

@Component({
  templateUrl: 'content-create.component.html',
  directives: [ ContentFormComponent ]
})
export class ContentCreateComponent {

  constructor(private router:Router) { }

  onSaved(must:Must) {
    this.router.navigate(['/content', must.id]);
  }
}
