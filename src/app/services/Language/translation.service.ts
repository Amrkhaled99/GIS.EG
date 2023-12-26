// translation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguageSubject.asObservable();
  private translations: { [key: string]: any } = {};

  constructor(private http: HttpClient) {}

  loadTranslations(): void {
    this.currentLanguage$.subscribe((language) => {
      // Load the JSON file for the current language
      this.http.get(`/assets/i18n/${language}.json`).subscribe(
        (translations: { [key: string]: any }) => {
          this.translations = translations;
        },
        (error) => {
          console.error(`Error loading translations: ${error}`);
        }
      );
    });
  }

  setLanguage(language: string): void {
    this.currentLanguageSubject.next(language);
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  translate(key: string): string {
    return this.translations[key] || key;
  }

  getDirection(): string {
    return this.translations['direction'] || 'ltr'; // Default to LTR if not found
  }
}
