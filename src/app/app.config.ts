import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    importProvidersFrom(
      ScrollToModule.forRoot()
    )
  ]
};
