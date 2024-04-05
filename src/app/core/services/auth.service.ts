// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookiesService } from './cookies.service';
import { AUTH_CONSTANTS } from '../../constants/global-constants';
import { environment as ENV } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookiesService: CookiesService
  ) { }


  logout(): void {
    this.cookiesService.delete(AUTH_CONSTANTS.USER_AUTHORIZATION_TOKEN);
    this.navigateToLogin();

  }

  isAuthenticated(): boolean {
    return this.cookiesService.isAvailable(AUTH_CONSTANTS.USER_AUTHORIZATION_TOKEN);
  }

  getAuthToken(): string {
    return this.cookiesService.get(AUTH_CONSTANTS.USER_AUTHORIZATION_TOKEN);
  }

  setAuthToken(token: string): void {
    this.cookiesService.update(AUTH_CONSTANTS.USER_AUTHORIZATION_TOKEN, token);
  }

  navigateToLogin(redirectionRequired: boolean = false) {
    let redirectURL = '';
    if (redirectionRequired) {
      redirectURL = '#/login?redirectURI=' + this.getRedirectURI();
    }
    console.log("ENV.POWER_HCM_HOST + redirectURL", ENV.POWER_HCM_HOST + redirectURL);
    window.location.href = ENV.POWER_HCM_HOST + redirectURL;
  }

  navigateToApps(id: string = "") {
    window.location.href = ENV.POWER_HCM_HOST + '/' + id;
  }

  getRedirectURI() {
    return encodeURIComponent(location.href);
  }

  private extractDetails(token: string): any {
    const payload = (token.split('.')).slice(1, 2)[0];
    return JSON.parse(atob(payload));
  }

  userInfo(): any {
    if (this.isAuthenticated()) {
      const token = this.cookiesService.get(AUTH_CONSTANTS.USER_AUTHORIZATION_TOKEN);
      return this.extractDetails(token);
    }
    return {};
  }

  userId():any{
   const userInformation = this.userInfo();
   const userId = userInformation['EmpCode']
   return userId;
}

}
