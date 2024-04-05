import { Route } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
export const route: Route[] = [
   {
        path: 'dashboard',
        loadChildren: () => import('./core/dashboard/dashboard.route').then(mod => mod.DASHBOARD_ROUTE),
        canActivate: [AuthGuard]
        
    }, {
        path: 'goals',
        loadChildren: () => import('./core/goals/goals.route').then(mod => mod.GOALS_ROUTE),
        canActivate: [AuthGuard]
      
    }, {
        path: '',
        redirectTo:"/dashboard",
        pathMatch: 'full',
    },

];
