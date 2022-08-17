import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showTechnicienBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService,private router:Router) { }

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

}