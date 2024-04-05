import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { menuItems } from '../../../constants/global-constants';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { OffcanvasComponent } from "../offcanvas/offcanvas.component";
import { AuthService } from '../../services/auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [RouterLink, NgbDropdownModule, OffcanvasComponent,NgbTooltipModule]
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentUrl: string;
  title: string;
  isLoggedIn: boolean = false;
  userDetails: any = {};

  routeObservable!: Observable<Event>;
  routeSubscription!: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService) {
    this.currentUrl = menuItems[0].route;
    this.title = menuItems[0].name;
  }

  ngOnInit(): void {
    // Subscribe to router events to track navigation changes
    this.routeObservable=this.router.events.pipe(
      // Filter only NavigationEnd events, which signal the end of a navigation event
      filter((event: Event) => event instanceof NavigationEnd)
    )
    
    this.routeSubscription = this.routeObservable.subscribe((event: any) => {
      // Cast the event to NavigationEnd type
      const navigationEnd = event as NavigationEnd;
      // Find the selected menu item based on the current URL
      const selectedItem = menuItems.find((navItem: any) => navItem.route === navigationEnd.url);
      // Update the title with the name of the selected menu item
      this.title = selectedItem ? selectedItem.name : menuItems[0].name;
    });

    this.isLoggedIn = this.authService.isAuthenticated();
    this.userDetails = this.authService.userInfo();
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
