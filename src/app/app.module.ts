import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { environment } from '../environments/environment';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

import { ApiService } from './services';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes, Router } from '@angular/router';

const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS, ApiService];

import { AppComponent } from './app.component';
import { ContainerComponent } from './container';
import { OneComponent } from './component/oneComponent/one.component';

const routes: Routes = [
  { path: '', component: OneComponent }
];

import { ButtonComponent } from './component/button/button.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ButtonComponent,
    ContainerComponent,
    OneComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    LayoutModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    StoreModule.forRoot({}, {}),
    RouterModule.forRoot(routes, { useHash: true }),
    MatTableModule,
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'Leo Lanese - @ngrx Store DevTools',
      maxAge: 25,
      logOnly: true,
      features: {
        pause: true, // start/pause recording of dispatched actions
        lock: true, // lock/unlock dispatching actions and side effects
        persist: true, // persist states on page reloading
        export: true, // export history of actions in a file
        import: true, // import history of actions from a file
        jump: true, // jump back and forth (time travelling)
        skip: true, // skip (cancel) actions
        reorder: true, // drag and drop actions in the history list
        dispatch: true, // dispatch custom actions or action creators
        test: true // generate testmos for the selected actions
      }
    })
  ],
  providers: [environment.ENV_PROVIDERS, APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // Diagnostic only: inspect router configuration
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    // console.warn('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
