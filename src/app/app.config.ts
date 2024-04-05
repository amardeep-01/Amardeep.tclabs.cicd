import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { route } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthService } from './core/services/auth.service';
import { HttpClientModule, provideHttpClient, withFetch, HttpClient, HTTP_INTERCEPTORS, withInterceptors } from "@angular/common/http";
import { AuthInterceptor } from './core/interceptor-http.interceptor';
import { errorInterceptor } from './core/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(route,  withHashLocation()), provideClientHydration(), provideAnimationsAsync('noop'),importProvidersFrom(HttpClientModule),importProvidersFrom(HttpClient), provideHttpClient(withFetch()), AuthService, provideHttpClient(withInterceptors([errorInterceptor])), {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }]
};
