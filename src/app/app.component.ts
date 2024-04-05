import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { SideNavComponent } from './core/components/side-nav/side-nav.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SideNavComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'achieve-ui'
  openedNavBar: boolean = true;
  constructor() {}


  handleSideNavEvent(event: { open: boolean}) {
    this.openedNavBar = event.open;
  }
}
