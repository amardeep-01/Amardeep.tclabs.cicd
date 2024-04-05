import { Route } from '@angular/router';
import { GoalsComponent } from './goals.component';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { ViewGoalComponent } from './view-goal/view-goal.component';

export const GOALS_ROUTE: Route[] = [
{
   path:"",
   component: GoalsComponent
},
{
   path:"addGoal",
   component: AddGoalComponent
},
{
   path:"viewGoal",
   component: ViewGoalComponent
}

];
