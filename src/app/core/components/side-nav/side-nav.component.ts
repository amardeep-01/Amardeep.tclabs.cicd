import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { menuItems } from './../../../constants/global-constants';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  sidebarItems = menuItems;
  openNavBar: boolean = true;
  selectedElement: string = '';

  @Output()
  sideNavEvent: EventEmitter<{ open: boolean }> = new EventEmitter<{ open: boolean }>();

  handleNavBar() {
    this.openNavBar = !this.openNavBar;
    this.sideNavEvent.emit({ open: this.openNavBar });
  }
}
