import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withInterceptors,} from "@angular/common/http";
import {authInterceptor} from "./service/auth/auth.interceptor";
import {responseInterceptor} from "./service/auth/response.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        responseInterceptor
      ])
    )]
};
