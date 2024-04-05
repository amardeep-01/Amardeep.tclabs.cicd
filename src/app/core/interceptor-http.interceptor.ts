import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToekn = this.authService.getAuthToken()
    if (authToekn) {
      const modifiedRequest = req.clone({
        headers: req.headers
        .set('Authorization', `${authToekn}`)
        .set('Content-Type', 'application/json')
        
      });
      return next.handle(modifiedRequest);
    }

    return next.handle(req);
  }
}
