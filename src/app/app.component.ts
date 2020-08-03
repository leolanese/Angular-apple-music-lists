import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export const ROOT_SELECTOR = 'app-container';

@Component({
  selector: ROOT_SELECTOR,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: '<app></app>'
})
export class AppComponent {
  title = 'app';

  constructor() {}

  public ngOnInit() {}

}



