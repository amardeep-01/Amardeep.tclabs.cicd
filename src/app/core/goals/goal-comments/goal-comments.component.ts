import { Component, Input, OnInit } from '@angular/core';
import { GoalComments } from '../services/interfaces/goal-comments-interface';
import { FormsModule } from '@angular/forms';
import { GoalsService } from '../../services/goals.service';
import { getDateDifference } from '../../utils/date.utils';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-goal-comments',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './goal-comments.component.html',
  styleUrl: './goal-comments.component.scss'
})
export class GoalCommentsComponent implements OnInit {

  constructor(private goalsService: GoalsService,private authService:AuthService) { }

  userDetails:any={};

  ngOnInit(): void {
      this.userDetails = this.authService.userInfo();
  }

  @Input()
  GoalCommentsList: GoalComments[] = [];
  newComment: string = '';

  addComment() {
    if (this.newComment !== '') {
      const newGoalCommentObj: GoalComments = {
        commentBy: this.userDetails.UserName,
        description: this.newComment,
        createdOn: getDateDifference((new Date()).toString())
      };

      this.GoalCommentsList.push(newGoalCommentObj);
      this.newComment = '';
    }
    console.log(this.GoalCommentsList)
  }

}
