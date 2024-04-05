import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GoalFooterComponent } from '../goal-footer/goal-footer.component';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { GoalsService } from '../../services/goals.service';
import {createGoal} from '../../utils/goal.utils'
@Component({
  selector: 'app-add-goal',
  standalone: true,
  imports: [ RouterModule, GoalFooterComponent,NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe],
  templateUrl: './add-goal.component.html',
  styleUrl: './add-goal.component.scss'
})
export class AddGoalComponent {

  constructor(private goalService: GoalsService, private router : Router ){}

  model?: NgbDateStruct;
  summary = ''
  description = ''

  backToGoal(){
    this.router.navigate(['/goals']);
  }

  onSubmit(){
    this.postGoal(this.summary, this.description, this.model);
    // this.router.navigate(['/goals']);
    this.router.navigate(['/goals'], { skipLocationChange: false });
  }

  
  postGoal(summary: string, description: string, model: NgbDateStruct | undefined){

    const goal = createGoal(summary,description,model);
    this.goalService.postGoal(goal)
      .subscribe(
      (response) => {
        // Handle the successful response
        console.log('Goal posted successfully:', response);
      },
      (error) => {
        console.error('Error posting goal:', error);
        console.log(goal)
      }
    );
  }

}

