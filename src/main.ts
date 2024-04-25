/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule, TranslatePipe } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const I18N_CONFIG = {
  defaultLanguage: 'english', // this name need to be the same as the JSON file
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  }
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
