import { Component, EventEmitter, Output } from '@angular/core';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-goal-footer',
  standalone: true,
  imports: [],
  templateUrl: './goal-footer.component.html',
  styleUrl: './goal-footer.component.scss'
}) 
export class GoalFooterComponent {
  constructor(private modalService: NgbModal) {}

  @Output() submit = new EventEmitter<void>();

  onSubmit() {
    this.submit.emit();
  }

  openModal() {

    const modalRef = this.modalService.open(PopupModalComponent, { centered: true });

    modalRef.componentInstance.submit.subscribe(() => {
      this.submit.emit();

    });

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }


}