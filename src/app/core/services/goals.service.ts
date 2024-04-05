import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from '../../../environments/environment';
import { API_ENDPOINTS } from '../../constants/global-constants';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  private goalCommentsUrl = 'assets/goal-comments.json' 

  private authService = inject(AuthService);

  constructor(private http: HttpClient) { }
  
  getGoals(userId: any = 1): Observable<any> {
    userId = this.authService.userId();
    const apiUrl = ENV.ACHIEVE_API_HOST + API_ENDPOINTS.GET_GOALS_BY_USERID + '/' + userId

    return this.http.get(apiUrl);
  }

  // Post Goal Api method
postGoal(goal: any): Observable<any> {
  const apiUrl = ENV.ACHIEVE_API_HOST + API_ENDPOINTS.POST_GOALS

  return this.http.post(apiUrl, goal)
}


}
