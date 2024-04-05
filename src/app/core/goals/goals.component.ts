import { Component, OnDestroy } from '@angular/core';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { GoalsService } from '../services/goals.service';
import { HttpClientModule } from '@angular/common/http';
import { Goals } from '../interfaces/goals-interface';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GoalCommentsComponent } from './goal-comments/goal-comments.component';
import { GoalComments } from './services/interfaces/goal-comments-interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-goals',
  standalone: true,
  providers: [
    GoalsService
  ],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss',
  imports: [GoalsListComponent, HttpClientModule, GoalCommentsComponent]
})
export class GoalsComponent implements OnDestroy {
  goalListPresent: boolean = false;
  goals: Goals[] = [];
  goalContent: string = "";
  goalDate: string = "";
  goalHeader: string = "";

  goalSubscription!: Subscription;

  // below code is for goal comments
  goalComments: GoalComments[] = [];
  // above code is for goal comments
  constructor(private goalService: GoalsService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.goalSubscription = this.goalService.getGoals().subscribe({
      next: (data: Goals[]) => {
        if (data && data.length !== 0) {
          this.goalListPresent = true;
          this.goals = data;
        }

        console.log("Your Goals: ", data);
      },
      error: error => {
        if (error && error.status == 403) {
          //this.authService.navigateToLogin(true);
        }
        console.error("Error fetching goals: ", error);
      }
    }
    );
  }

  addGoal(): void {
    this.router.navigate(['/goals/addGoal']);
  }

  ngOnDestroy(): void {
    this.goalSubscription.unsubscribe()
  }
}