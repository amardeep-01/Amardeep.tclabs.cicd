import { Component, Input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Goals } from '../../interfaces/goals-interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-goals-list',
  standalone: true,
  imports: [NgbDropdownModule,CommonModule],
  templateUrl: './goals-list.component.html',
  styleUrl: './goals-list.component.scss'
})
export class GoalsListComponent {
  goalListPresent: boolean  = true;
  @Input() goals: Goals[] = [];
  
  constructor(private router: Router) { }

  viewGoal(){
    this.router.navigate(['/goals/viewGoal']);
  }

  handleOptionsClick() {
    console.log('Options clicked');
  }
}
