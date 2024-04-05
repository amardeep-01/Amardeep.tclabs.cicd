import { Component, inject, TemplateRef } from '@angular/core';
import { NgbDatepickerModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { appsDetails } from '../../../constants/global-constants';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [NgbDatepickerModule],
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss'],
})
export class OffcanvasComponent {
  private offcanvasService = inject(NgbOffcanvas);
  private authService = inject(AuthService);
  closeResult = '';
  appsDetails = appsDetails

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
  }

  navigateTo(id: string = "") {
    this.authService.isAuthenticated() && this.authService.navigateToApps(id);
  }
}