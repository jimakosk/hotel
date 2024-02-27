import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
        return this.http.get<Translation>(`C:/Users/Angular/hotelapl/assets/i18n/${lang}.json`);

        //return this.http.get<Translation>(`${environment.baseUrl}/assets/i18n/${lang}.json`);
    }
}
