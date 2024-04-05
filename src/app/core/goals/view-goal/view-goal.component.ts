import { Component } from '@angular/core';
import { GoalCommentsComponent } from "../goal-comments/goal-comments.component";
import { GoalComments } from '../services/interfaces/goal-comments-interface';

@Component({
    selector: 'app-view-goal',
    standalone: true,
    templateUrl: './view-goal.component.html',
    styleUrl: './view-goal.component.scss',
    imports: [GoalCommentsComponent]
})
export class ViewGoalComponent {

  goalComments: GoalComments[] = [];

}
