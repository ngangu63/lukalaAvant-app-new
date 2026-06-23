/* <reference types="@angular/localize" /> */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routes } from './app/app.routes';

/* bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));  */

  bootstrapApplication(AppComponent, {
      providers: [
        provideRouter(routes), // Provide your application's routes
        { provide: LocationStrategy, useClass: HashLocationStrategy }
      ]
    }).catch(err => console.error(err)); 
