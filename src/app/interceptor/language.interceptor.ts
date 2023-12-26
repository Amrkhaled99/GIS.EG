import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {

  constructor(private cookies:CookieService){}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the user's preferred language from a service or any other source
    const userPreferredLanguage = this.getCookies(); // Replace with actual user preference

    // Clone the request and add the Accept-Language header
    const modifiedRequest = request.clone({
      setHeaders: {
        'Accept-Language': userPreferredLanguage,
      },
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }

  getCookies(){
    return this.cookies.get("cLanguage");
   }
 
}