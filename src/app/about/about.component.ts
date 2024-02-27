import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule,
} from '@ngneat/transloco';
import { Injectable, isDevMode, NgModule } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
@Injectable({ providedIn: 'root' })
export class AboutComponent implements AboutComponent {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return "tetoia ";
  }

}
// @NgModule({
//   exports: [TranslocoModule],
//   providers: [
//     {
//       provide: TRANSLOCO_CONFIG,
//       useValue: translocoConfig({
//         availableLangs: ['en', 'el', 'es'],
//         defaultLang: 'en',
//         reRenderOnLangChange: true,
//         prodMode: !isDevMode(),
//       }),
//     },
//    // { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
//   ],
// });
