import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showTechnicienBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showTechnicienBoard = this.roles.includes('ROLE_TECHNICIEN');
      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
   this.router.navigateByUrl("/login")
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
