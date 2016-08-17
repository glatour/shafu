import { Component, Output } from '@angular/core';

import { MustsService } from '../shared/services/musters.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [ MustsService ]
})
export class Home {
  error = "";
  countries = [];

  constructor(private service:MustsService){ }

  ngOnInit() {
    this.service.get()
      .subscribe(
        data => {
          this.countries = data;
        },
        error => this.error = error
      );
  }
}
