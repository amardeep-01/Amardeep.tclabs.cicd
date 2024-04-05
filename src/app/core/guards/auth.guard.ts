// auth.guard.ts
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = ( 
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot
) => {
  const authServce = inject(AuthService);
  if (authServce.isAuthenticated()) {
    return true;
  } else {
     // inject(Router).navigate(['/login']);
     authServce.navigateToLogin(true);
      
      return false;
    }
};
