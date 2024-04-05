import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalCommentsComponent } from './goal-comments.component';

describe('GoalCommentsComponent', () => {
  let component: GoalCommentsComponent;
  let fixture: ComponentFixture<GoalCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalCommentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
