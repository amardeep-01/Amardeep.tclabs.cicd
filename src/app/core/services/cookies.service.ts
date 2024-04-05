

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {

  constructor(private cookies: CookieService) { }
  get: any = (cookie: string) => {
    return this.cookies.get(cookie);
  };

  isAvailable(cookie: string) {
    return this.cookies.check(cookie)
  }

  delete: any = (cookie: any) => {
    return this.cookies.delete(cookie, '/');
  };

  deleteAll: any = () => {
    return this.cookies.deleteAll('/');
  };

  update: any = (cookie: string, value: string, options: any) => {
    this.cookies.set(cookie, value, options);    
  };
  
}
