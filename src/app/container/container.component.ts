import {ChangeDetectionStrategy, Component, OnInit, Output} from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services';

@Component({
  selector: 'app',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {
  httpApiService$: Observable<object>;
  faCoffee = faList;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getObservableAPI();
  }

  private getObservableAPI() {
   // this.apiService.getData('featured-playlists.json').subscribe(res=>this.requests=res);
    this.httpApiService$ = this.apiService.getData('featured-playlists.json');
  }

}
