import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'oneComponent-app',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneComponent implements OnInit {

  @Input()
  valueLabelButton = 'Link';

  @Output()
  onClick = new EventEmitter<Object>();

  @Input()
  httpApiService$: Observable<object>;

  @Output('lesson')
  lessonEmitter = new EventEmitter<any>();

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void { }

  private trackByData(index) {
    return index;
  }

  public onClickLink($event, url) {
    window.open(url, "_blank");
  }

}
