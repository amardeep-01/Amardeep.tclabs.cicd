import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-popup-modal',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './popup-modal.component.html',
  styleUrl: './popup-modal.component.scss'
})
export class PopupModalComponent {

  @Output() submit = new EventEmitter<void>();
  selectedOption = "";

  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  redirectToGoal(): void {
    this.submit.emit();
    this.activeModal.close()
    this.router.navigate(['/goals'], { skipLocationChange: false });
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }
}