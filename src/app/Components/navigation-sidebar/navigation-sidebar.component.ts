import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.css'],
})
export class NavigationSidebarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isAdmin: boolean;

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
