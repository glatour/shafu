import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MustsService } from '../shared/services/musters.service';
import { Must } from '../shared/models/must';

@Component({
    selector: 'content-form',
    templateUrl: './content-form.component.html',
    providers: [ MustsService ]
})
export class ContentFormComponent {
  @Input() must:Must;
  @Output() onSaved:EventEmitter<Must> = new EventEmitter<Must>();
  
  constructor(private service:MustsService) {}

  onSubmit() {
    this.service
      .save(this.must)
      .subscribe((must:Must) => {
        this.must = must;
        this.onSaved.emit(this.must);
      });
  }
  
  ngOnInit() {
    if(this.must == null)
      this.must = new Must('', '');
  }
}