import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalFooterComponent } from './goal-footer.component';

describe('GoalFooterComponent', () => {
  let component: GoalFooterComponent;
  let fixture: ComponentFixture<GoalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
